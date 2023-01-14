import {
  Component,
  OnInit,
  Input,
  Renderer2,
  EventEmitter,
  Output,
} from '@angular/core';
import { WeekDays } from '../../core/types';

@Component({
  selector: 'lx-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  @Input() startDate: WeekDays = 'Sunday';

  @Output() changeDay = new EventEmitter<Date>();

  public weekDays: string[] = [];
  public days: any[] = [];
  public currentDate: Date = new Date();
  public currentDay!: number;
  public currentMonth!: number;
  public currentYear!: number;

  public changeNumber!: number;

  constructor(private _renderer: Renderer2) {}

  ngOnInit(): void {
    /* Initial current Day and Month, 
    change week days order basis on chosen by input(),
     full fill days basis on current month */
    this.currentDay = this.currentDate.getDate();
    this.changeNumber = this.currentDate.getMonth();
    this.currentMonth = this.currentDate.getMonth();
    this.currentYear = this.currentDate.getFullYear();

    this.changeWeekDaysOrder();

    this.days = Array.from(
      { length: this.getCurrentMonthDays(2023, this.currentDate.getMonth()) },
      (_, i) => i + 1
    );

    this.days = [
      ...new Array(
        new Date(`${this.currentYear}-${this.currentMonth + 1}-01`).getDay()
      ),
      ...this.days,
    ];
  }

  /**
   * It changes the current day and emits the changeDay event
   * @param {number} day - number - the day of the week that the user has selected
   */
  public changeCurrentDay(day: number): void {
    if (!day) return;
    this.currentDate = new Date(new Date().setDate(day));
    this.currentDay = day;

    this.changeDay.emit(this.currentDate);
  }

  public changeMonth(type: 'increase' | 'decrease'): void {
    type === 'increase'
      ? this.changeDate((this.changeNumber += 1))
      : this.changeDate((this.changeNumber -= 1));

    this.days = Array.from(
      { length: this.getCurrentMonthDays(2023, this.changeNumber + 1) },
      (_, i) => i + 1
    );

    this.days = [
      ...new Array(
        new Date(`${this.currentYear}-${this.currentMonth + 1}-01`).getDay()
      ),
      ...this.days,
    ];
  }

  private getCurrentMonthDays(year: number, month: number): number {
    return new Date(year, month, 0).getDate();
  }

  private changeDate(month: number): void {
    this.currentDate = new Date(new Date().setMonth(month));
    this.currentYear = this.currentDate.getFullYear();
    this.currentMonth = this.currentDate.getMonth();
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
