import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'lx-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  constructor(private _renderer: Renderer2) {}

  public currIndex = 0;

  ngOnInit(): void {}

  changeSlide(viewport: HTMLElement, action: 'right' | 'left' | number): void {
    this.changeTransitionDuration(viewport, 0.3);
    if (action === 'left') {
      if (this.currIndex === 0) {
        this._renderer.setStyle(
          viewport,
          'transform',
          `translateX(-${viewport.children.length - 1}00%)`
        );
        this.changeTransitionDuration(viewport, 0.2 * viewport.children.length);
        this.currIndex = +viewport.children.length - 1;
      } else {
        this.currIndex -= 1;
        this._renderer.setStyle(
          viewport,
          'transform',
          `translateX(-${this.currIndex}00%)`
        );
      }
    }
    if (action === 'right') {
      if (this.currIndex === viewport.children.length - 1) {
        this._renderer.setStyle(viewport, 'transform', `translateX(0%)`);
        this.changeTransitionDuration(viewport, 0.2 * viewport.children.length);
        this.currIndex = 0;
      } else {
        this.currIndex += 1;
        this._renderer.setStyle(
          viewport,
          'transform',
          `translateX(-${this.currIndex}00%)`
        );
      }
    }
    if (typeof action === 'number') {
      this._renderer.setStyle(
        viewport,
        'transform',
        `translateX(-${action - 1}00%)`
      );
      this.changeTransitionDuration(
        viewport,
        0.3 * this.countDifference(action, this.currIndex + 1)
      );
      this.currIndex = action - 1;
    }
  }

  private changeTransitionDuration(
    viewport: HTMLElement,
    duration: number
  ): void {
    this._renderer.setStyle(
      viewport,
      'transition',
      `all ${duration}s ease-in-out`
    );
  }

  private countDifference(numb1: number, numb2: number): number {
    if (numb1 > numb2) {
      return numb1 - numb2;
    } else if (numb1 < numb2) {
      return numb2 - numb1;
    } else {
      return 1;
    }
  }
}
