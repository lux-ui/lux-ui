import { FormRoutingModule } from './form-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPageComponent } from './input-page/input-page.component';
import { CoreModule as LuxUiModule } from 'projects/luxui/src/public-api';
import { SelectPageComponent } from './select-page/select-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputPageComponent, SelectPageComponent],
  imports: [CommonModule, LuxUiModule, FormRoutingModule, FormsModule],
})
export class FormModule {}
