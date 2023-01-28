import { INotification } from './../../core/interfaces/INotification';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Renderer2,
} from '@angular/core';
import { NotificationService } from './notification.service';
import { tap } from 'rxjs';
import { NotificationType } from '../../core/enums/NotificationType';

@Component({
  selector: 'lx-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit, AfterViewInit {
  @ViewChild('toast') toast!: ElementRef;
  @ViewChild('toastWrapper') toastWrapper!: ElementRef;

  public content: INotification | null = null;
  public readonly NotificationType = NotificationType;

  private timeout!: NodeJS.Timeout;

  constructor(
    private readonly _notificationService: NotificationService,
    private readonly _renderer: Renderer2
  ) {}

  public ngOnInit(): void {
    this._notificationService.notificationContent
      .pipe(
        tap((status) => {
          this.content = null;
          clearTimeout(this.timeout);

          if (status) {
            this.timeout = setTimeout(() => {
              this.hideNotification();
            }, 5000);
          }
        })
      )
      .subscribe((content: INotification | null) => {
        this.content = content;

        if (this.content) {
          this.posNotification();
        }
      });
  }

  public ngAfterViewInit(): void {
    this._renderer.removeChild(
      this.toastWrapper.nativeElement,
      this.toast.nativeElement
    );
  }

  public hideNotification() {
    clearTimeout(this.timeout);
    this._renderer.removeChild(
      this.toastWrapper.nativeElement,
      this.toast.nativeElement
    );
    this._notificationService.notificationContent.next(null);
  }

  private posNotification(): void {
    this._renderer.appendChild(
      this.toastWrapper.nativeElement,
      this.toast.nativeElement
    );

    switch (this.content?.position) {
      case 'top':
        this.toast.nativeElement.style.top = 0;
        this.toast.nativeElement.style.left = '50%';
        this.toast.nativeElement.style.transform = 'translateX(-50%)';
        break;
      case 'bottom':
        this.unsetPosition();
        this.toast.nativeElement.style.bottom = 0;
        this.toast.nativeElement.style.left = '50%';
        this.toast.nativeElement.style.transform = 'translateX(-50%)';
        break;
      case 'left':
        this.unsetPosition();
        this.toast.nativeElement.style.top = '50%';
        this.toast.nativeElement.style.left = 0;
        this.toast.nativeElement.style.transform = 'translateY(-50%)';
        break;
      case 'right':
        this.unsetPosition();
        this.toast.nativeElement.style.top = '50%';
        this.toast.nativeElement.style.right = 0;
        this.toast.nativeElement.style.transform = 'translateY(-50%)';
        break;
      case 'top-right':
        this.unsetPosition();
        this.toast.nativeElement.style.top = 0;
        this.toast.nativeElement.style.right = 0;
        break;
      case 'top-left':
        this.unsetPosition();
        this.toast.nativeElement.style.top = 0;
        this.toast.nativeElement.style.left = 0;
        break;
      case 'bottom-right':
        this.unsetPosition();
        this.toast.nativeElement.style.bottom = 0;
        this.toast.nativeElement.style.right = 0;
        break;
      case 'bottom-left':
        this.unsetPosition();
        this.toast.nativeElement.style.bottom = 0;
        this.toast.nativeElement.style.left = 0;
        break;
      default:
        this.unsetPosition();
        this.toast.nativeElement.style.bottom = 0;
        this.toast.nativeElement.style.right = 0;
        break;
    }
  }

  private unsetPosition(): void {
    this.toast.nativeElement.style.transform = 'unset';
    this.toast.nativeElement.style.bottom = 'unset';
    this.toast.nativeElement.style.top = 'unset';
    this.toast.nativeElement.style.left = 'unset';
    this.toast.nativeElement.style.right = 'unset';
  }
}
