import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, AfterContentInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <!-- <auth-form 
        (submitted)="createUser($event)">
        <h3>Create account</h3>
        <button type="submit">
          Join us
        </button>
      </auth-form> -->
      <div #entry></div>
    </div>
  `
})
export class AppComponent implements AfterViewInit{

  //to communicate to that piece here in the DOM
  @ViewChild('entry', {read: ViewContainerRef}) entry: ViewContainerRef

  constructor(
    private resolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef
  ){}
  

  ngAfterViewInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);

    // create the actual component and place it in entry placeholder.
    const component = this.entry.createComponent(authFormFactory);
    component.instance.title = 'Create account'; //overriding the actual value of title, so it can be dynamic
    component.instance.submitted.subscribe(this.loginUser) // subscribing to the output from the AuthFormComponent class.
    

    this.cd.detectChanges();
  }

  loginUser(user: User) {
    console.log('Login', user);
  }


}