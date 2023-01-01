import { DocumentationRoutingModule } from './documentation-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationPageComponent } from './documentation-page/documentation-page.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [DocumentationPageComponent],
  imports: [CommonModule, DocumentationRoutingModule, CoreModule],
})
export class DocumentationModule {}
