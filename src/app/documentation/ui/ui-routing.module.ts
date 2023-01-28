import { NotificationPageComponent } from './pages/notification-page/notification-page.component';
import { TooltipPageComponent } from './pages/tooltip-page/tooltip-page.component';
import { PaginationPageComponent } from './pages/pagination-page/pagination-page.component';
import { TabsPageComponent } from './pages/tabs-page/tabs-page.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { DividerPageComponent } from './pages/divider-page/divider-page.component';
import { CarouselPageComponent } from './pages/carousel-page/carousel-page.component';
import { RatePageComponent } from './pages/rate-page/rate-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { ProgressPageComponent } from './pages/progress-page/progress-page.component';
import { LoadingSpinnerPageComponent } from './pages/loading-spinner-page/loading-spinner-page.component';

const routes: Routes = [
  { path: 'rate', component: RatePageComponent },
  { path: 'cards', component: CardsPageComponent },
  { path: 'menu', component: MenuPageComponent },
  { path: 'carousel', component: CarouselPageComponent },
  { path: 'divider', component: DividerPageComponent },
  { path: 'calendar', component: CalendarPageComponent },
  { path: 'progress', component: ProgressPageComponent },
  { path: 'tabs', component: TabsPageComponent },
  { path: 'pagination', component: PaginationPageComponent },
  { path: 'tooltip', component: TooltipPageComponent },
  { path: 'notification', component: NotificationPageComponent },
  { path: 'spinner', component: LoadingSpinnerPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiRoutingModule {}
