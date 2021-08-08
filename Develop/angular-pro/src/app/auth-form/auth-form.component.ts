
import { AuthRememberComponent } from './auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';

import { Component, Output, EventEmitter} from '@angular/core';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  styles: [
    `.email { border-color: #9f72e6 }`
  ],
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <h3>{{title}}</h3>
        <label>
          Email address
          <input type="email" name="email" ngModel>
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>
       <button type="submit">
         {{title}}
       </button>
      </form>
    </div>
  `
})
export class AuthFormComponent {

  title = 'login'

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(
    ){}

  


  onSubmit(value: User) {
    console.log('sub values: ', value)
    this.submitted.emit(value);
  }

}
