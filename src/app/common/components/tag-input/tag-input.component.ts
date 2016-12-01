import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-tag-input',
  template:
    `<app-tag-item 
      *ngFor="let item of items; let index = index" 
      [item]="item" 
      [index]="index"
      (removeItem)="removeTag($event)"></app-tag-item>
      <div [ngSwitch]="type" class="input-field">
        <app-typeahead *ngSwitchCase="typeahead" [(selectedValue)]="inputValue" (selectedValueChange)="selectedCB()"></app-typeahead>
        <input *ngSwitchDefault
          type="text" 
          placeholder="type"
          [(ngModel)]="inputValue"
          (keydown)="inputChange($event)">
      </div>`
      ,
  styleUrls: ['tag-input.component.css']
})

export class TagInputComponent {
  items: string[];
  inputValue: string = '';
  @Input() type: string;

  constructor() {
    this.items = ['ddd', 'dddw', 'asda', 'asd'];
    this.inputValue = '';
  }

  removeTag(index) {
    this.items.splice(index, 1);
  }

  inputChange(event) {
    let key = event.keyCode;
    switch(key) {
      case 13: //Enter
        this.selectedCB();
        event.preventDefault();
        break;
      }
  }

  selectedCB(){
    this.items.push(this.inputValue);
    this.inputValue = ' ';
  }

}

