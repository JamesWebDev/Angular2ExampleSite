import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaygroundComponent } from './playground/playground.component';

const routes: Routes = [
  { path: '', component: PlaygroundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);