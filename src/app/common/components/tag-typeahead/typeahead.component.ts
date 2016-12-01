import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Http, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import {Observable} from "rxjs";

@Component({
  selector: 'app-typeahead',
  template:
    `<input type="text" [formControl]="searchModel" placeholder="typeahead">
      <ul>
        <li *ngFor="let result of results | async">{{result.name}}</li>
      </ul>`,
  styleUrls: ['typeahead.component.css']
})
export class TypeaheadComponent {
   results: Observable<any[]>;

   searchModel = new FormControl();

   headers = new Headers({
     'Content-Type': 'application/json',
     'API_KEY': 'unCMfY0Oi67io%2blq%2fU%2fjs%2btWRBYg60E3AFUm7w3f2GY%3d' });
   options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http){
     // this.results = this.searchModel.valueChanges
     //   .map(value => `api/projects/search?model.nameKey=${value}`)
     //   .switchMap(url => this.http.get(url, this.options), (req, res) => {console.log(res.json); return res.json()})
     }

}
