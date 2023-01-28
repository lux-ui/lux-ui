import { NotificationType } from './../../../../../../projects/luxui/src/lib/core/enums/NotificationType';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'projects/luxui/src/public-api';

@Component({
  selector: 'app-notification-page',
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.scss'],
})
export class NotificationPageComponent implements OnInit {
  public visibility: boolean = false;

  constructor(private readonly _notificationService: NotificationService) {}

  ngOnInit(): void {}

  public showSuccessNotification(): void {
    this._notificationService.showNotification(
      'title',
      'message',
      'top-right',
      NotificationType.SUCCESS
    );
  }
  public showErrorNotification(): void {
    this._notificationService.showNotification(
      'title',
      'message',
      'top-left',
      NotificationType.ERROR
    );
  }
  public showWarningNotification(): void {
    this._notificationService.showNotification(
      'title',
      'message',
      'bottom-left',
      NotificationType.WARNING
    );
  }
  public showInfoNotification(): void {
    this._notificationService.showNotification(
      'title',
      'message',
      'bottom-right',
      NotificationType.INFO
    );
  }

  public setVisibility(val: boolean): void {
    this.visibility = val;
  }
}
