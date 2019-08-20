import { Component } from '@angular/core';
import { Factura } from '@nubox-test/factura';
import { Nomina } from '@nubox-test/nomina';
import { Xd } from '@nubox-test/contabilidad';

@Component({
  selector: 'nubox-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pegasus';

  constructor(){
    const b = new Factura();
    const c = new Nomina();
    const xd = new Xd()
  }
}
