import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  OnDestroy,
  QueryList,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'lx-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent
  implements AfterContentInit, AfterViewInit, OnDestroy
{
  @ContentChildren('slide') slidesRef!: QueryList<ElementRef>;
  @ViewChild('carousel') carousel!: ElementRef;

  @Input() lxTabsPosition: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
  @Input() lxTabs: boolean = true;
  @Input() lxNav: boolean = true;
  @Input() lxAutoplay: boolean = false;
  @Input() lxAnimation: 'blink' | 'slide' = 'slide';

  public slides!: any[];
  public tabs!: any[];
  public currIndex = 0;
  public intervallTimer = interval(5000);

  private $slidesSub!: Subscription;

  constructor(private _renderer: Renderer2) {}

  ngAfterContentInit(): void {
    this.slides = Array.from(
      { length: this.slidesRef.length },
      (_, i) => i + 1
    );
    this.createDots(0, 4);
  }

  ngAfterViewInit(): void {
    if (this.lxAutoplay) {
      this.$slidesSub = this.intervallTimer.subscribe(() => {
        this.changeSlide(this.carousel.nativeElement, 'right');
      });
    }
  }

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
    this.createDots(this.currIndex - 2, this.currIndex + 3);
  }

  private changeTransitionDuration(
    viewport: HTMLElement,
    duration: number
  ): void {
    if (this.lxAnimation === 'blink') {
      this._renderer.setStyle(
        viewport,
        'transition',
        `transform 0s ease-in-out`
      );
      this._renderer.addClass(viewport, 'blink');
      setTimeout(() => {
        this._renderer.removeClass(viewport, 'blink');
      }, 300);
    } else if (this.lxAnimation === 'slide') {
      this._renderer.setStyle(
        viewport,
        'transition',
        `transform ${duration}s ease-in-out`
      );
    }
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

  private createDots(first: number, last: number): void {
    if (this.slides.length <= 5) {
      this.tabs = this.slides;
    } else {
      if (this.currIndex < this.slides[2] && this.currIndex > 0) {
        this.tabs = this.slides.slice(0, this.currIndex + 3);
      } else if (this.currIndex === 0) {
        this.tabs = this.slides.slice(0, this.currIndex + 4);
      } else if (this.currIndex === this.slides.length - 1) {
        this.tabs = this.slides.slice(this.currIndex - 3, this.slides.length);
      } else {
        this.tabs = this.slides.slice(first, last);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.$slidesSub) {
      this.$slidesSub.unsubscribe();
    }
  }
}
