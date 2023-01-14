import {
  Component,
  OnInit,
  Input,
  Renderer2,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { WeekDays } from '../../core/types';

@Component({
  selector: 'lx-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  @Input() startDate: WeekDays = 'Sunday';

  public weekDays: string[] = [];

  constructor(private _renderer: Renderer2) {}

  ngOnInit(): void {
    this.changeWeekDaysOrder();
  }

  private changeWeekDaysOrder(): void {
    if (this.startDate === 'Sunday') {
      this.weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    } else if (this.startDate === 'Tuesday') {
      this.weekDays = ['Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo'];
    } else if (this.startDate === 'Monday') {
      this.weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    } else if (this.startDate === 'Wednesday') {
      this.weekDays = ['We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu'];
    } else if (this.startDate === 'Thursday') {
      this.weekDays = ['We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu'];
    } else if (this.startDate === 'Friday') {
      this.weekDays = ['Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th'];
    } else if (this.startDate === 'Saturday') {
      this.weekDays = ['Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr'];
    }
  }
}
