import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { DropdownState } from './dropdown.state';
import { FakeHttpService } from './fake-http.service';

@NgModule({
  imports: [BrowserModule, NgxsModule.forRoot([DropdownState])],
  declarations: [AppComponent],
  providers: [FakeHttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
