import { Component } from '@angular/core';
import { LocalStorageService } from './localstorage.service';
import { Contact } from './contact';
import { ContactService } from './contact.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Messenger';

  arrContacts: Contact[] = [];
  searchField = '';

  ngOnInit(): void {
    this.arrContacts = this.contactService.getAllContacts();
  }

  constructor(private localstorage: LocalStorageService,private contactService:ContactService) {
  this.contactService.recordContacts(); 
  }

  choseContact(id:number):void{
  this.contactService.emitChatIdSubject(id);
  }

}

