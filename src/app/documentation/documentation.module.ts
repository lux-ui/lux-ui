import { DocumentationRoutingModule } from './documentation-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationPageComponent } from './documentation-page/documentation-page.component';

@NgModule({
  declarations: [
    DocumentationPageComponent
  ],
  imports: [CommonModule, DocumentationRoutingModule],
})
export class DocumentationModule {}
