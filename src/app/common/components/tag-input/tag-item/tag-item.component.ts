import { Component, EventEmitter, Input, Output  } from '@angular/core';


@Component({
  selector: 'app-tag-item',
  template:
    `{{item}}
    <span (click)="removeTag()">
      &times;
    </span>`,
  styleUrls: ['tag-item.component.css']
})
export class TagItemComponent {
  @Input() item: string;
  @Input() index: number;
  @Output() removeItem = new EventEmitter();

  constructor() {

  }

  removeTag() {
    this.removeItem.emit(this.index)
  }

}
