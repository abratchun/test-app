import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import { TeamsComponent } from './teams.component';

@NgModule({
  declarations: [
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
  ],
  exports: [TeamsComponent],
  providers: [],
  bootstrap: [TeamsComponent]
})
export class TeamsModule { }
