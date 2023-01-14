import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { MonthNamePipe } from '../../core/pipes/month-name.pipe';

@NgModule({
  declarations: [CalendarComponent, MonthNamePipe],
  imports: [CommonModule],
  exports: [CalendarComponent],
})
export class CalendarModule {}
