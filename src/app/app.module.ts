import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CallSignComponent } from './call-sign/call-sign.component';

@NgModule({
  declarations: [
    AppComponent,
    CallSignComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
