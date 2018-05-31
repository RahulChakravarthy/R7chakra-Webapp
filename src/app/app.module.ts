import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StickyNavModule} from 'ng2-sticky-nav/dist';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StickyNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
