import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    indexAxis: 'x'
  };
  public barChartType: ChartType = 'bar';
  /*  public barChartPlugins = [
     DataLabelsPlugin
   ]; */

  public barChartData: ChartData<'bar'> = {
    labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: 'RGB(180, 53, 250)' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
      { data: [32, 64, 25, 78, 45, 12, 7], label: 'Series C' }
    ]
  }

  constructor() { }
  
  ngOnInit(): void {
    if( this.horizontal ){
      // this.barChartOptions?.indexAxis = 'y'
    }
  }


}
