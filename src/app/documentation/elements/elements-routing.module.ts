import { LinksPageComponent } from './pages/links-page/links-page.component';
import { IconButtonsPageComponent } from './pages/icon-buttons-page/icon-buttons-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsPageComponent } from './pages/buttons-page/buttons-page.component';

const routes: Routes = [
  { path: 'buttons', component: ButtonsPageComponent },
  { path: 'links', component: LinksPageComponent },
  { path: 'icon-buttons', component: IconButtonsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementsRoutingModule {}
