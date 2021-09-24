import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'stock-branch',
  styleUrls: ['stock-branch.component.scss'],
  template: `
    <div [formGroup]="parent">
       <div formGroupName="store">  <!--this here makes reference to the model defined in the parent TS, which is the source of truth -->
        <input 
          type="text" 
          placeholder="Branch ID"
          formControlName="branch">
        <input 
          type="text" 
          placeholder="Manager Code"
          formControlName="code">
      </div>
    </div>
  `
})
export class StockBranchComponent {
  @Input()
  parent: FormGroup;
}