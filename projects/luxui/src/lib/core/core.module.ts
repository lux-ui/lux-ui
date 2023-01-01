import { MenuItemModule } from './../ui/menu/menu-item/menu-item.module';
import { MenuModule } from './../ui/menu/menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule, MenuModule, MenuItemModule],
  exports: [MenuItemModule, MenuModule],
})
export class CoreModule {}
