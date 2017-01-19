import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";
@Component({
  selector: 'app-lazy-loaded',
  templateUrl: './lazy-loaded.component.html',
  styleUrls: ['./lazy-loaded.component.scss']
})
export class LazyLoadedComponent implements OnInit {
  lodashTextExample:string;
  constructor() { }

  ngOnInit() {
    this.lodashTextExample = _.join(['a', 'b', 'c'], '~');
  }
}
