import { Component, Output, EventEmitter } from '@angular/core';



@Component({
    selector: 'auth-remember',
    template: `
    <label>
        <input type="checkbox" (change)="onChecked($event.target.checked)">
    </label>
    `
})
export class AuthRememberComponent {

    @Output()
    checked: EventEmitter<boolean> = new EventEmitter<boolean>();

    changed = 'Test';

    onChecked(value: boolean) {
        this.checked.emit(value);
    }



}