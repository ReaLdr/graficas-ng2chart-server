import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor( private http: HttpClient ) { }

  getUsuariosRedessociales(){
    return this.http.get('http://localhost:3000/grafica');
  }

  getUsuariosRedessocialesDonaData(){
    return this.getUsuariosRedessociales()
            .pipe(
              delay(2000),
              map( data =>{
                const labels = Object.keys( data );
                const values = Object.values( data );

                return {labels, values};
              })
            )
  }

}
