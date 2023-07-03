import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './main';
import { Parent } from './parent'; // Import your component
import { Child } from './child'; // Import your component
import { ChatService } from './chat.service';

@NgModule({
  declarations: [App, Parent, Child], // Add your component to the declarations array
  imports: [BrowserModule],
  providers: [ChatService],
  bootstrap: [App, Parent, Child],
  exports: [Parent, Child],
})
export class AppModule {}
