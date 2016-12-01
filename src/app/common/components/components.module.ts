import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { TypeaheadComponent } from './typeahead/typeahead.component';
import { TagItemComponent } from './tag-input/tag-item/tag-item.component';
import { TagInputComponent } from './tag-input/tag-input.component';

@NgModule({
  declarations: [
    TypeaheadComponent, TagItemComponent, TagInputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    TypeaheadComponent,
    TagInputComponent
  ],
  providers: [],
  bootstrap: []
})
export class ComponentsModule { }
