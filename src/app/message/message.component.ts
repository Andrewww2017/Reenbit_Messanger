import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message,Contact } from '../contact';
import { ContactService } from './../contact.service';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})

@Injectable()
export class MessageComponent implements OnInit {

  headerArrayName:Contact[]=[];

  arrMessages: Message[] = [];
  userName: string = '';
  userImage:string='';
  response: any;
  newMessage = '';
  message = '';
  contactId!: number;

  constructor(private http: HttpClient, private contactService: ContactService) {
  }
  ngOnInit(): void {
    this.presEnterButton();
    this.contactService.chatId.subscribe(id => {
      this.contactId = id;
      this.contactService.getContactById(this.contactId);
    });
    this.contactService.chatContact.subscribe(contact =>{
      this.arrMessages=contact.messages;
      this.userName=contact.userName;
      this.userImage=contact.image;
    })
  }

  sendBtn() {
    this.contactService.pushMessage(this.contactId, {
      message: this.newMessage,
      creationDate: Date.now(),
      isOwnMes: true
    });

    setTimeout(() => {
      this.http.get('https://api.chucknorris.io/jokes/random').subscribe((response: any) => {
        this.contactService.pushMessage(this.contactId, {
          message: response.value,
          creationDate: Date.now(),
          isOwnMes: false
        });
      });
    }, 500)
    this.newMessage = '';

  }

  presEnterButton() {
    window.addEventListener("keydown", (event) => {
      if (event.code === 'Enter') {
        this.sendBtn();
      }
    }, true)
  }

}

