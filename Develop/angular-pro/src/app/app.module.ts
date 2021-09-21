import { ExampleOneComponent } from './one/one.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthFormModule } from './auth-form/auth-form.module';

import { AppComponent } from './app.component';
import { ExampleTwoComponent } from './two/two.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleOneComponent,
    ExampleTwoComponent
  ],
  imports: [
    BrowserModule,
    AuthFormModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
