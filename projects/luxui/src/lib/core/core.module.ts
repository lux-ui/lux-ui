import { RateModule } from './../ui/rate/rate.module';
import { MenuItemModule } from './../ui/menu/menu-item/menu-item.module';
import { MenuModule } from './../ui/menu/menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule, MenuModule, MenuItemModule, RateModule],
  exports: [MenuItemModule, MenuModule, RateModule],
})
export class CoreModule {}
