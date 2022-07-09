import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { DropdownState } from './dropdown.state';

@NgModule({
  imports: [BrowserModule, NgxsModule.forRoot([DropdownState])],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
