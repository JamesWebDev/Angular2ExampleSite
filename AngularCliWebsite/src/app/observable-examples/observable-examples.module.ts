import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaygroundComponent } from './playground/playground.component';
import { routing } from './observable-examples.routing';
import { FilterPersonsPipe } from './filter-persons.pipe'


@NgModule({
  imports: [
    CommonModule,    
    routing
  ],
  declarations: [PlaygroundComponent, FilterPersonsPipe]
})
export class ObservableExamplesModule { }
