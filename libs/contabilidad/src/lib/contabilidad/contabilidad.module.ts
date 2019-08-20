import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContabilidadComponent } from './contabilidad.component';

@NgModule({
  declarations: [ContabilidadComponent],
  imports: [
    CommonModule
  ],
  exports: [ContabilidadComponent]
})
export class ContabilidadModule { }
