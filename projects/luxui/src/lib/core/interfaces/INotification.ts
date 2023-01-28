import { NotificationType } from '../enums/NotificationType';
import { Position } from '../types';

export interface INotification {
  title: string;
  message: string;
  position: Position;
  type: NotificationType;
}
