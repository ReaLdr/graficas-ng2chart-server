import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { NgChartsModule } from 'ng2-charts';

import { GraficasRoutingModule } from './graficas-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { GraficasDobleComponent } from './pages/graficas-doble/graficas-doble.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';
import { DonaComponent } from './pages/dona/dona.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    BarrasComponent,
    GraficasDobleComponent,
    DonaHttpComponent,
    GraficaBarraComponent,
    DonaComponent
  ],
  imports: [
    CommonModule,
    GraficasRoutingModule,
    NgChartsModule
  ]
})
export class GraficasModule { }
