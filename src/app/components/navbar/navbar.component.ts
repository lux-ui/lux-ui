import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public openModal: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public toggleModal(open: boolean): void {
    this.openModal = open;
  }
}
