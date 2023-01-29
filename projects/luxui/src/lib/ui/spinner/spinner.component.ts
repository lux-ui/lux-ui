import { Component, Input } from '@angular/core';

@Component({
  selector: 'lx-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  @Input() type: 'classic' = 'classic';
  @Input() spinnerColor: string = '#333';
  @Input() textColor: string = '#333';
  @Input() text!: string;

  constructor() {}
}
