import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';

import * as $ from 'jquery';

import {FilterPersonsPipe} from '../filter-persons.pipe'

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
  personList:string[] = ['AAA','AAAA','AAAAA','AAAAAA','AAAAAAA','James','Jackson','Jack','Jill','Adam','Eve','Hansel','Gretel','Thing 1','Thing 2'];
  searchString:string;
  constructor() { }

  ngOnInit() {
    var keyups = Observable.fromEvent<any>($('#search'),'keyup')
        .map(e => e.target.value)
        //.filter(text=>text.length > 3)
        .debounceTime(400)

    keyups.subscribe(data=> {
      this.searchString = data;
      console.log(data);
    });
  }

}
