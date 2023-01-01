import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationRoutingModule } from './documentation/documentation-page-routing.module';

const routes: Routes = [
  {
    path: 'documentation',
    loadChildren: () => DocumentationRoutingModule,
  },
  {
    path: '',
    redirectTo: 'documentation',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
