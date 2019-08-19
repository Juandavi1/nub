import { Component } from '@angular/core';
import { Contabilidad } from '@nubox-test/contabilidad';
import { Factura } from '@nubox-test/factura';
import { Nomina } from '@nubox-test/nomina';

@Component({
  selector: 'nubox-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pegasus';

  constructor(){
    const a = new Contabilidad();
    const b = new Factura();
    const c = new Nomina();
    //const u = new
  }
}
