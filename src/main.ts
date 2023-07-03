import 'zone.js/dist/zone';
import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'main.html',
})
export class App
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy
{
  name = 'Angular';

  public log(msg: string, clear: boolean = false) {
    console.log(msg);
  }

  constructor() {
    console.clear();
    this.log('constructor');
  }

  //TIMING:
  //Called before ngOnInit() (if the component has bound inputs) and whenever one or more data-bound input properties change.
  ngOnChanges() {
    //PURPOSE:
    //If your component has no inputs or you use it without providing any inputs, the framework will not call ngOnChanges().
    this.log('ngOnChanges');
  }
  //TIMING:
  //Called once, after the first ngOnChanges(). ngOnInit() is still called even when ngOnChanges() is not
  ngOnInit() {
    //PURPOSE:
    //Initialize the directive or component after Angular first displays the data-bound properties and sets the directive or component's input properties
    this.log('ngOnInit');
  }

  //TIMING:
  //Called immediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the   first run.
  ngDoCheck() {
    //PURPOSE:
    //Detect and act upon changes that Angular can't or won't detect on its own.
    this.log('ngDoCheck');
  }

  //TIMING:
  //Called once after the first ngDoCheck().
  ngAfterContentInit() {
    //PURPOSE:
    //Respond after Angular projects external content into the component's view, or into the view that a directive is in.
    this.log('ngAfterContentInit');
  }

  //TIMING:
  //Called after ngAfterContentInit() and every subsequent ngDoCheck().
  ngAfterContentChecked() {
    //PURPOSE:
    //Respond after Angular checks the content projected into the directive or component.
    this.log('ngAfterContentChecked');
  }

  click(str: string = 'click') {
    this.log(str);
    this.ngOnDestroy();
  }
  //TIMING:
  //Called immediately before Angular destroys the directive or component.
  ngOnDestroy() {
    //PURPOSE:
    //Cleanup just before Angular destroys the directive or component. Unsubscribe Observables and detach event handlers to avoid memory leaks
    this.log('ngOnDestroy');
  }
}

bootstrapApplication(App);
