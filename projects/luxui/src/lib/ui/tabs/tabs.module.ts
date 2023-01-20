import { TabComponent } from './tab/tab.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabContentDirective } from './tab-content.directive';

@NgModule({
  declarations: [TabsComponent, TabContentDirective, TabComponent],
  imports: [CommonModule],
  exports: [TabsComponent, TabContentDirective, TabComponent],
})
export class TabsModule {}
