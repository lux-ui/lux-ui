import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rwd-menu',
  templateUrl: './rwd-menu.component.html',
  styleUrls: ['./rwd-menu.component.scss'],
})
export class RwdMenuComponent implements OnInit {
  @Input() openModal!: boolean;
  @Output() open: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public close(): void {
    this.open.emit(false);
  }
}
