import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-spinner-page',
  templateUrl: './loading-spinner-page.component.html',
  styleUrls: ['./loading-spinner-page.component.scss'],
})
export class LoadingSpinnerPageComponent {
  public isLoading = false;

  public props = [
    {
      name: '[type]',
      desc: 'type of spinner',
      type: "'classic'",
      default: "'classic'",
    },
    {
      name: '[spinnerColor]',
      desc: 'color of the spinner',
      type: 'string',
      default: '#333',
    },
    {
      name: '[text]',
      desc: 'whether the text is inside the spinner',
      type: 'string',
      default: '-',
    },
    {
      name: '[textColor]',
      desc: 'color of the text',
      type: 'string',
      default: '#333',
    },
  ];
  constructor() {}
}
