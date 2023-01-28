import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationRoutingModule } from './documentation/documentation-page-routing.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'documentation',
    loadChildren: () => DocumentationRoutingModule,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
