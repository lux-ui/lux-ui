import { DocumentationPageComponent } from './documentation-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiRoutingModule } from './ui/ui-routing.module';

const routes: Routes = [
  {
    path: '',
    component: DocumentationPageComponent,
    children: [
      {
        path: 'ui',
        loadChildren: () => UiRoutingModule,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentationRoutingModule {}
