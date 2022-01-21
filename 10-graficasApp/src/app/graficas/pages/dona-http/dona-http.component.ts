import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  // public colors: string[] = ['#FF0DBC', '#DC0BDE', '#CC00F5'];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        /* data: [
          350, 450, 100, 150
        ], */
        data: [],
        // backgroundColor: this.colors
      }
      // { data: [ 50, 150, 120 ] },
      // { data: [ 250, 130, 70 ] }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';


  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {
    
    /* this.graficasService.getUsuariosRedessociales()
      .subscribe(data => {
        
        const labels = Object.keys( data );
        const values = Object.values( data );

        // console.log(labels.);
        
      }); */
      this.graficasService.getUsuariosRedessocialesDonaData()
      .subscribe( ({labels, values}) =>{
        // console.log(labels);
        // console.log(values);
        labels.forEach( (rea, i) =>{
          this.doughnutChartLabels.push( labels[i] );
        });
        
        this.doughnutChartData.datasets[0].data = values; 
        });
  }

}
