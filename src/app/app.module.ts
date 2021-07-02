import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPipe } from './search.pipe';
import { MessageComponent } from './message/message.component';
import { HttpService } from './new-service.service';
import { LocalStorageService } from './localstorage.service';
import { ContactService } from './contact.service';



@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    MessageComponent
  ],
  imports: [
 
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService,LocalStorageService,ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
