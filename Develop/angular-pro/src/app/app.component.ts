import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, AfterContentInit, AfterViewInit, ChangeDetectorRef, ComponentRef, TemplateRef } from '@angular/core';
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
      <ng-template #tmpl let-name let-location="location">
        {{name}} : {{location}}
      </ng-template>
    </div>
  `
})
export class AppComponent implements AfterViewInit{


  //to communicate to that piece here in the DOM
  @ViewChild('entry', {read: ViewContainerRef}) entry: ViewContainerRef

  @ViewChild('tmpl') tmpl: TemplateRef<any>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef
  ){}

  ngAfterViewInit() {
    
      // this behaves like the *ngFor of angular, thats how it passes the index, odd etc...
    this.entry.createEmbeddedView(this.tmpl, {
      //passing the context
      $implicit: ' Jameson Lamour', // the implicit can be referenced by any name in the template
      location: 'Santiago CL'
    });

    this.cd.detectChanges();
  }

  

}