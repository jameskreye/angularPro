import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, AfterContentInit, AfterViewInit, ChangeDetectorRef, ComponentRef, TemplateRef } from '@angular/core';
import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
      <button (click)="addProp()">Add property</button>
      <button (click)="changeUser()">Change user object</button>
      <button (click)="changeName()">Change name property</button>
    <div>
     
      <div class="users">
        <example-one [user]="user"></example-one>
        <example-two [user]="user"></example-two>
      </div>
    </div>
  `
})
export class AppComponent{

  user: any = {
    name: 'Mark Hoppus',
    age: 44,
    location: 'California'
  };

  addProp() {
    this.user.email = 'blink@blink-182.net';
  }

  changeName() {
    this.user.name = 'Travis Barker';
  }

  changeUser() {
    this.user = {
      name: 'Tom Delonge',
      age: 41,
      location: 'California'
    };
  }
}