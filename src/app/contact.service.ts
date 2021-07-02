import { Injectable } from '@angular/core';
import { LocalStorageService } from './localstorage.service';
import { Contact, contacts, IContact } from './contact';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class ContactService {

    chatId: Observable<number>;
    private chatContactSubject: BehaviorSubject<Contact> = new BehaviorSubject<Contact>(new IContact(0, 'string', 'name', []));
    chatContact: Observable<Contact>;
    private chatIdSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    constructor(private localStorage: LocalStorageService) {
        this.chatId = this.chatIdSubject.asObservable();
        this.chatContact = this.chatContactSubject.asObservable();
    }
    recordContacts() {
        const isContactsExist = !this.localStorage.get('contacts');
        if (isContactsExist) {
            this.localStorage.set('contacts', contacts);
        }
    }
    emitChatIdSubject(id: number) {
        this.chatIdSubject.next(id);
    }
    getAllContacts(): Contact[] {
        return this.localStorage.get('contacts');
    }
    getContactById(id: number):  void {
        const contacts = this.getAllContacts();
        const index = contacts.findIndex(contact => contact.id === id);
        this.chatContactSubject.next(contacts[index]);
    }
    pushMessage(contactId: number, message: any): void {
        const contacts = this.getAllContacts();
        const index = contacts.findIndex(contact => contact.id === contactId);
        contacts[index].messages.push(message);
        this.localStorage.set('contacts', contacts);
        this.chatContactSubject.next(contacts[index]);
    }
}
