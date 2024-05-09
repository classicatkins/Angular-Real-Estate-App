import {Component, OnInit} from '@angular/core';
import {HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import {ChatBoxComponent} from './chat-box/chat-box.component';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule, ChatBoxComponent, CommonModule],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
      <app-chat-box *ngIf="showChat"></app-chat-box>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  showChat = false;

  ngOnInit() {
    setTimeout(() => {
      this.showChat = true;
    }, 30000); // 30000 milliseconds -> 30 seconds
  }
}
