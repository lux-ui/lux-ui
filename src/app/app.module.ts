import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CoreModule as LuxUIModule } from '../../projects/luxui/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DocumentationModule } from './documentation/documentation-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CoreModule,
    LuxUIModule,
    DocumentationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
