import { CarouselPageComponent } from './pages/carousel-page/carousel-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatePageComponent } from './pages/rate-page/rate-page.component';
import { CoreModule as LuxUiModule } from 'projects/luxui/src/public-api';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RatePageComponent,
    CardsPageComponent,
    MenuPageComponent,
    CarouselPageComponent,
  ],
  imports: [CommonModule, LuxUiModule, RouterModule],
})
export class UiModule {}
