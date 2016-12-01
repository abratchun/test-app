import { Component, Output, Input, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Http, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import {Observable} from "rxjs";

@Component({
  selector: 'app-typeahead',
  template:
    `<input type="text" [formControl]="searchModel" placeholder="typeahead" [ngModel]="selectedValue">
      <ul>
        <li *ngFor="let result of results | async" (click)="selectItem(result)">{{result.Name}}</li>
      </ul>`,
  styleUrls: ['./typeahead.component.css']
})
export class TypeaheadComponent {
  @Output() selectedValueChange = new EventEmitter();
  @Input() selectedValue: any;

  results: Observable<any[]>;

  searchModel = new FormControl();

  headers = new Headers({
    'Content-Type': 'application/json',
    'API_KEY': 'unCMfY0Oi67io%2blq%2fU%2fjs%2btWRBYg60E3AFUm7w3f2GY%3d' });
  options = new RequestOptions({ headers: this.headers });


  constructor(private http: Http) {
     this.results = this.restartObservable();
  }

  selectItem(item) {
    this.selectedValue = item.Name;
    this.selectedValueChange.emit(item.Name);
    this.results = Observable.of([]);
    this.results = this.restartObservable();
  };

  restartObservable(){
    return this.searchModel.valueChanges
      .filter(value => value.replace(/\s/g,'').length > 1)
      .debounceTime(150)
      .map(value => `api/projects/search?model.nameKey=${value}`)
      .switchMap(url => this.http.get(url, this.options), (req, res) => { console.log(res); return res.json();})
  }


}
