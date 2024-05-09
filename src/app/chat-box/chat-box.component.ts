import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-box',
  standalone: true,
  imports: [
    CommonModule,   
    FormsModule    
  ],
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent {
  messages: string[] = [];
  newMessage: string = '';

  constructor(private chatService: ChatService) { }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.chatService.addMessage(this.newMessage);
      this.newMessage = '';
    }
  }

  getMessages(): string[] {
    return this.chatService.getMessages();
  }
   

  // sendMessage() {
  //   if (this.newMessage) {
  //     this.messages.push(this.newMessage);
  //     this.newMessage = '';
  //   }
  // }
}
