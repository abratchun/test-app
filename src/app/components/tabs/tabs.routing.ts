import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { ViewComponent } from './view/view.component';

const appRoutes: Routes = [
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'view',
    component: ViewComponent
  },
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
