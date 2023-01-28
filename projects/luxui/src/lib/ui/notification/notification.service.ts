import { NotificationType } from './../../core/enums/NotificationType';
import { INotification } from './../../core/interfaces/INotification';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Position } from '../../core/types';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  public notificationContent = new BehaviorSubject<INotification | null>(null);

  constructor() {}

  public showNotification(
    title: string,
    message: string,
    position: Position = 'top-right',
    type: NotificationType = NotificationType.SUCCESS
  ): void {
    this.notificationContent.next({ title, message, position, type });
  }
}
