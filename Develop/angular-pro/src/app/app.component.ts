import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, AfterContentInit, AfterViewInit, ChangeDetectorRef, ComponentRef } from '@angular/core';
import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
  
  <button (click)="destroyComponent()" style="margin-left: 15px;">Destroy</button>
  <button (click)="moveComponent()" style="margin-left: 15px;">Move</button>
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

  component: ComponentRef<AuthFormComponent>;

  //to communicate to that piece here in the DOM
  @ViewChild('entry', {read: ViewContainerRef}) entry: ViewContainerRef

  constructor(
    private resolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef
  ){}
  

  ngAfterViewInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);

    this.entry.createComponent(authFormFactory); // this one now has index -1 by default
    // create the actual component and place it in entry placeholder.
    this.component = this.entry.createComponent(authFormFactory, 0); // can pass the index to order it just like javascript array
    this.component.instance.title = 'Create account'; //overriding the actual value of title, so it can be dynamic
    this.component.instance.submitted.subscribe(this.loginUser) // subscribing to the output from the AuthFormComponent class.
    

    this.cd.detectChanges();
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

  destroyComponent() {
    this.component.destroy();
  }

  moveComponent() {
    this.entry.move(this.component.hostView, 1)
  }



}