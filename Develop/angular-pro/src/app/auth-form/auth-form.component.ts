
import { AuthRememberComponent } from './auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';

import { Component, Output, EventEmitter, ViewChild, AfterViewInit, ContentChildren, QueryList, AfterContentInit, ChangeDetectorRef, ViewChildren } from '@angular/core';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel>
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>
        <ng-content select="auth-remember"></ng-content>
        <auth-message [style.display]="(showMessage ? 'inherit' : 'none')"></auth-message>
        <auth-message [style.display]="(showMessage ? 'inherit' : 'none')"></auth-message>
        <auth-message [style.display]="(showMessage ? 'inherit' : 'none')"></auth-message>
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

  showMessage: boolean;

  @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>;

  //read the children of AuthRememberComponent, each queryList item is of type component
  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(private cd: ChangeDetectorRef ){}

  

  ngAfterViewInit() {
    
    // check if there is a message, then loop through them to mutate the days for each after the was init...
    if(this.message) {
      this.message.forEach((message) => {
        message.days = 25;
      });
    }

    // this is needed because angular do the additional check when the app is running on dev mode
    this.cd.detectChanges()
    
  }

/* This lifecycle hook is called after the content has been projected */
  ngAfterContentInit() {

    if(this.remember) {
      this.remember.forEach(( item ) => item.checked.subscribe((checked: boolean) => this.showMessage = checked));

    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
