import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiteComponent } from './bite/bite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DigitComponent } from './digit/digit.component';

@NgModule({
  declarations: [
    AppComponent,
    BiteComponent,
    DigitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
