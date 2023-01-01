import { SettingsModule } from './settings/settings.module';
import { UiModule } from './ui/ui.module';
import { CoreModule as LuxUIModule } from 'projects/luxui/src/lib/core/core.module';
import { DocumentationRoutingModule } from './documentation-page-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationPageComponent } from './documentation-page.component';
import { CoreModule } from '../core/core.module';
import { ElementsModule } from './elements/elements.module';

@NgModule({
  declarations: [DocumentationPageComponent],
  imports: [
    CommonModule,
    DocumentationRoutingModule,
    CoreModule,
    LuxUIModule,
    UiModule,
    ElementsModule,
    SettingsModule,
  ],
})
export class DocumentationModule {}
