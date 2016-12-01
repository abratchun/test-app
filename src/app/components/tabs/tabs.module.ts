import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule} from '@angular/material';
import { CommonModule } from '../../common/common.module';

import { TabsComponent } from './tabs.component';
import { SearchComponent } from './search/search.component';
import { ViewComponent } from './view/view.component';
import { Routing } from './tabs.routing';


@NgModule({
  declarations: [
    TabsComponent, SearchComponent, ViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    Routing,
    CommonModule
  ],
  exports: [TabsComponent],
  providers: [],
  bootstrap: [TabsComponent]
})
export class TabsModule { }
