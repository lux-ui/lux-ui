import { SelectPageComponent } from './select-page/select-page.component';
import { InputPageComponent } from './input-page/input-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'input', component: InputPageComponent },
  { path: 'select', component: SelectPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutingModule {}
