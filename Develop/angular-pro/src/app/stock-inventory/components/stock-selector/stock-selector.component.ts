import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Product } from '../../models/product.interface';

@Component({
  selector: 'stock-selector',
  styleUrls: ['stock-selector.component.scss'],
  template: `
    <div class="stock-selector" [formGroup]="parent">
      <div formGroupName="selector">
        <select formControlName="product_id">
          <option value="">Select stock</option>
          <option
            *ngFor="let product of products"
            [value]="product.id">
            {{ product.name }}
          </option>
        </select>
        <input 
          type="number"
          step="10"
          min="10"
          max="1000"
          formControlName="quantity">
        <button 
          type="button"
          (click)="onAdd()">
          Add stock
        </button>
      </div>
    </div>
  `
})
export class StockSelectorComponent {
  @Input()
  parent: FormGroup; // data passed by the parent
  
  @Input()
  products: Product[]; // data passed by the parent

  @Output()
  added = new EventEmitter<any>();

  // when a stock is added it sends an event to the parent with actual value
  // parent receive the value and update the stock produt array. 
  onAdd() {
    this.added.emit(this.parent.get('selector').value); 
  }
}