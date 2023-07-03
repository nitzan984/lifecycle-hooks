import 'zone.js/dist/zone';
import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from './chat.service';

@Component({
  selector: 'parent',
  standalone: true,
  imports: [CommonModule],
  template: '<button (click)="click()">click</button>',
})
export class Parent implements OnInit {
  constructor(private chatService: ChatService) {}

  ngOnInit() {
    console.log('Hello Parent');
  }

  click(str: string = 'click child') {
    console.log(str);
  }
}
