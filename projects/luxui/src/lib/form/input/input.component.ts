import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'lx-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements ControlValueAccessor {
  @Input() placeholder = '';
  @Input() color: string = '#000000';

  public input: any;

  public propagateChange = (_: any) => {};

  constructor() {}

  public writeValue(input: string): void {
    this.input = input;
  }

  public onChange: any = () => {};
  public onTouch: any = () => {};

  public registerOnChange(fn: any): void {
    this.onChange = fn;
    this.propagateChange = fn;
    if (this.input == null) {
      this.propagateChange('defautlValue');
    }
  }
  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
