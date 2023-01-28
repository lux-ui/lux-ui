import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.scss'],
})
export class InputPageComponent implements OnInit {
  public text: string = 'elo';

  constructor() {}

  ngOnInit(): void {}
}
