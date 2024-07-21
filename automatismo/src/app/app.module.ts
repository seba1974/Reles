import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { PiezapapasComponent } from './componentes/piezapapas/piezapapas.component';
import { PiezachicasComponent } from './componentes/piezachicas/piezachicas.component';

@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent,
    PiezapapasComponent,
    PiezachicasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
