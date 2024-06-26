import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private messages: string[] = [];

  constructor() { }

  addMessage(message: string) {
    this.messages.push(message);
  }

  getMessages(): string[] {
    return this.messages;
  }

  clearMessages() {
    this.messages = [];
  }
}
