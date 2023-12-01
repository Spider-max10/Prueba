import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Modelo } from '../interfaces/modelo/modelo';
import { Serie } from '../interfaces/serie/serie';

@Injectable({
  providedIn: 'root'
})
export class MicroservicioReparacionService {
  api: String = 'http://localhost:3002'
  constructor(private http: HttpClient) { }

//modelos
crear(model: Modelo){
return this.http.post(this.api + '/modelo',model)
}

ver(){
  return this.http.get(this.api + '/modelo')
}


eliminar(id: string){
  return this.http.delete(this.api + '/modelo/' +id)
}


//series
crearserie(serie: Serie){
return this.http.post(this.api + '/serie',serie)
}


verseries(){
  return this.http.get(this.api + '/serie')
}


eliminarserie(id: string){
  return this.http.delete(this.api + '/serie/' +id)
}
}
