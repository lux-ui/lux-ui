import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-page',
  templateUrl: './rate-page.component.html',
  styleUrls: ['./rate-page.component.scss'],
})
export class RatePageComponent implements OnInit {
  public rate!: number;
  constructor() {}

  ngOnInit(): void {}
  setValue(rate: any): void {
    this.rate = rate;
  }
}
