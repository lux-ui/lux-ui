import { CarouselModule } from './../ui/carousel/carousel.module';
import { CardModule } from './../ui/card/card.module';
import { RateModule } from './../ui/rate/rate.module';
import { MenuItemModule } from './../ui/menu/menu-item/menu-item.module';
import { MenuModule } from './../ui/menu/menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenuModule,
    MenuItemModule,
    RateModule,
    CardModule,
    CarouselModule,
  ],
  exports: [MenuItemModule, MenuModule, RateModule, CardModule, CarouselModule],
})
export class CoreModule {}
