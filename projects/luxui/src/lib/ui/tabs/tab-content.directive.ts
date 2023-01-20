import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[lxTabContent]',
})
export class TabContentDirective {
  constructor(public readonly el: ElementRef) {}
}
