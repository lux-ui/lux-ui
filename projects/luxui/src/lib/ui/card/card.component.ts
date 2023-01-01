import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lx-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title!: string;
  @Input() hoverable: boolean = false;
  @Input() loading: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
