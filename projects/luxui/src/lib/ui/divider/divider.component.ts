import { Component, Input } from '@angular/core';

@Component({
  selector: 'lx-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
})
export class DividerComponent {
  @Input() lxText!: string;
  @Input() lxOrientation: 'middle' | 'left' | 'right' = 'middle';

  constructor() {}
}
