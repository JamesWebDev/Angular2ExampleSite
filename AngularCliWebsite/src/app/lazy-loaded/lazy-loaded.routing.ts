import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyLoadedComponent } from './lazy-loaded/lazy-loaded.component';

const routes: Routes = [
  { path: '', component: LazyLoadedComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);