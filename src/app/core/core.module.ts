import { RwdMenuComponent } from './../components/navbar/rwd-menu/rwd-menu.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, RwdMenuComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, RwdMenuComponent],
})
export class CoreModule {}
