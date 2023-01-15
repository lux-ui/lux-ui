import { CalendarModule } from './../ui/calendar/calendar.module';
import { SelectModule } from './../ui/select/select.module';
import { DividerModule } from './../ui/divider/divider.module';
import { CarouselModule } from './../ui/carousel/carousel.module';
import { CardModule } from './../ui/card/card.module';
import { RateModule } from './../ui/rate/rate.module';
import { MenuItemModule } from './../ui/menu/menu-item/menu-item.module';
import { MenuModule } from './../ui/menu/menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressModule } from '../ui/progress/progress.module';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    MenuItemModule,
    RateModule,
    CardModule,
    CarouselModule,
    DividerModule,
    SelectModule,
    CalendarModule,
    ProgressModule,
  ],
  exports: [
    MenuItemModule,
    MenuModule,
    RateModule,
    CardModule,
    CarouselModule,
    DividerModule,
    SelectModule,
    CalendarModule,
    ProgressModule,
  ],
})
export class CoreModule {}
