import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EagerLoadedComponent } from './eager-loaded/eager-loaded.component';

const routes: Routes = [
  { path: '', redirectTo: 'eager', pathMatch: 'full' },
  { path: 'eager', component: EagerLoadedComponent },
  { path: 'lazy', loadChildren: 'app/lazy-loaded/lazy-loaded.module#LazyLoadedModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);