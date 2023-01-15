import { CarouselPageComponent } from './pages/carousel-page/carousel-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatePageComponent } from './pages/rate-page/rate-page.component';
import { CoreModule as LuxUiModule } from 'projects/luxui/src/public-api';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';
import { RouterModule } from '@angular/router';
import { DividerPageComponent } from './pages/divider-page/divider-page.component';
import { SelectPageComponent } from './pages/select-page/select-page.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { ProgressPageComponent } from './pages/progress-page/progress-page.component';

@NgModule({
  declarations: [
    RatePageComponent,
    CardsPageComponent,
    MenuPageComponent,
    CarouselPageComponent,
    DividerPageComponent,
    SelectPageComponent,
    CalendarPageComponent,
    ProgressPageComponent,
  ],
  imports: [CommonModule, LuxUiModule, RouterModule],
})
export class UiModule {}
