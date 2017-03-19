import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { PortalComponent }  from '../app/PortalComponent/portal.component';

@NgModule({
  imports:      [ BrowserModule ], // what stuff do i need
  declarations: [ AppComponent, PortalComponent ], // what things are we using
  bootstrap:    [ PortalComponent ] // where i will start??
})
export class AppModule { }
