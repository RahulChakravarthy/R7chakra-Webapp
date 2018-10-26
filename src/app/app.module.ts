import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NguiStickyModule } from '@ngui/sticky';
import {ScrollToModule} from 'ng2-scroll-to';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NguiStickyModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
