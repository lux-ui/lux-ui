import { FormModule } from './form/form.module';
import { SettingsRoutingModule } from './settings/settings-routing.module';
import { ElementsRoutingModule } from './elements/elements-routing.module';
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
      {
        path: 'elements',
        loadChildren: () => ElementsRoutingModule,
      },
      {
        path: 'settings',
        loadChildren: () => SettingsRoutingModule,
      },
      { path: 'form', loadChildren: () => FormModule },
      { path: '', redirectTo: 'settings/colors', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentationRoutingModule {}
