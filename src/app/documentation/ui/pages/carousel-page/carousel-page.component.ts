import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-page',
  templateUrl: './carousel-page.component.html',
  styleUrls: ['./carousel-page.component.scss'],
})
export class CarouselPageComponent implements OnInit {
  public props = [
    {
      name: '[lxTabsPosition]',
      desc: 'position of the tabs',
      type: "'top' | 'bottom' | 'left' | 'right'",
      default: "'bottom'",
    },
    {
      name: '[lxTabs]',
      desc: 'whether the tabs are displaying',
      type: 'boolean',
      default: 'true',
    },
    {
      name: '[lxNav]',
      desc: 'whether the nav is displaying',
      type: 'boolean',
      default: 'true',
    },
    {
      name: '[lxAutoplay]',
      desc: 'whether the slides are auto moving or not',
      type: 'boolean',
      default: 'false',
    },
    {
      name: '[lxAnimation]',
      desc: 'animation of the transition',
      type: "'blink' | 'slide'",
      default: "'slide'",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
