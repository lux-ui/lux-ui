import { SpacingComponent } from './pages/spacing/spacing.component';
import { ColorsComponent } from './pages/colors/colors.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from './pages/typography/typography.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ColorsComponent, SpacingComponent, TypographyComponent],
  imports: [CommonModule, BrowserModule],
})
export class SettingsModule {}
