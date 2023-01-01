import { CarouselPageComponent } from './pages/carousel-page/carousel-page.component';
import { RatePageComponent } from './pages/rate-page/rate-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';

const routes: Routes = [
  { path: 'rate', component: RatePageComponent },
  { path: 'cards', component: CardsPageComponent },
  { path: 'menu', component: MenuPageComponent },
  { path: 'carousel', component: CarouselPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiRoutingModule {}
