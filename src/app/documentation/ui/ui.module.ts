import { CarouselPageComponent } from './pages/carousel-page/carousel-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatePageComponent } from './pages/rate-page/rate-page.component';
import { CoreModule as LuxUiModule } from 'projects/luxui/src/public-api';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';
import { RouterModule } from '@angular/router';
import { DividerPageComponent } from './pages/divider-page/divider-page.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { ProgressPageComponent } from './pages/progress-page/progress-page.component';
import { TabsPageComponent } from './pages/tabs-page/tabs-page.component';
import { PaginationPageComponent } from './pages/pagination-page/pagination-page.component';
import { TooltipPageComponent } from './pages/tooltip-page/tooltip-page.component';
import { NotificationPageComponent } from './pages/notification-page/notification-page.component';

@NgModule({
  declarations: [
    RatePageComponent,
    CardsPageComponent,
    MenuPageComponent,
    CarouselPageComponent,
    DividerPageComponent,
    CalendarPageComponent,
    ProgressPageComponent,
    TabsPageComponent,
    PaginationPageComponent,
    TooltipPageComponent,
    NotificationPageComponent,
  ],
  imports: [CommonModule, LuxUiModule, RouterModule],
})
export class UiModule {}
