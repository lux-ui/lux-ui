import { TabContentDirective } from './../tab-content.directive';
import { Component, ContentChild, Input } from '@angular/core';

@Component({
  selector: 'lx-tab',
  template: '',
})
export class TabComponent {
  @Input() title!: string;
  @ContentChild(TabContentDirective) tabContent!: TabContentDirective;

  constructor() {}
}
