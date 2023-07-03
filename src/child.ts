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
  selector: 'child',
  standalone: true,
  imports: [CommonModule],
  template: '<button (click)="click()">click</button>',
})
export class Child implements OnInit {
  constructor(private chatService: ChatService) {}

  ngOnInit() {
    console.log('Hello Child');
  }

  click(str: string = 'click') {
    console.log(str);
  }
}
