import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContabilidadModule } from '@nubox-test/contabilidad';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ContabilidadModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
