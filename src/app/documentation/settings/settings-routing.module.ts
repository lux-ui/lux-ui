import { TypographyComponent } from './pages/typography/typography.component';
import { SpacingComponent } from './pages/spacing/spacing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorsComponent } from './pages/colors/colors.component';

const routes: Routes = [
  { path: 'colors', component: ColorsComponent },
  { path: 'spacing', component: SpacingComponent },
  { path: 'typography', component: TypographyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
