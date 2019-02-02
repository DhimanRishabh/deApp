import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {CoreModule} from './core/core.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatSidenavModule} from '@angular/material';
import {AutofocusModule} from 'angular-autofocus-fix';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CoreModule, BrowserAnimationsModule, MatIconModule, MatButtonModule, MatSidenavModule, MatMenuModule, MatCardModule, AutofocusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
