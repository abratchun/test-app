import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { HttpModule } from "@angular/http";

import { TypeaheadComponent } from './components/typeahead/typeahead.component';
import { TagInputComponent } from './components/tag-input/tag-input.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpModule
  ],
  exports:[
    TypeaheadComponent,
    TagInputComponent
  ],
  providers: []
})
export class CommonModule { }
