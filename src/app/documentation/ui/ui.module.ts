import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatePageComponent } from './pages/rate-page/rate-page.component';
import { CoreModule as LuxUiModule } from 'projects/luxui/src/public-api';

@NgModule({
  declarations: [RatePageComponent],
  imports: [CommonModule, LuxUiModule],
})
export class UiModule {}
