import {
  Component,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

type ColorType = 'primary' | 'warning' | 'success' | 'error' | string;

@Component({
  selector: 'lx-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnInit {
  @ViewChild('progress') progress!: ElementRef;

  @Input() set lxPercent(val: number) {
    if (val >= 0 && val <= 100) {
      this._percent = val;
    } else {
      this._percent = 0;
    }
  }
  @Input() displayPercent = false;
  @Input() displayType: 'tooltip' | null = null;
  @Input() set lxColor(color: ColorType) {
    if (color === 'primary') {
      this._color = '#2b2d42';
    } else if (color === 'error') {
      this._color = '#df4f60';
    } else if (color === 'success') {
      this._color = '#66bb6a';
    } else if (color === 'warning') {
      this._color = '#ffa726';
    } else {
      this._color = color;
    }
  }

  public get lxPercent(): number {
    return this._percent;
  }
  public get lxColor(): ColorType {
    return this._color;
  }

  private _percent!: number;
  private _color: ColorType = '#2b2d42';

  constructor(private _renderer: Renderer2) {}

  ngOnInit(): void {}
}
