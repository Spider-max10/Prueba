import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Modelo } from '../interfaces/modelo/modelo';
import { Serie } from '../interfaces/serie/serie';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ModeloImpresoraService {
api: String = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

crearmodelo(model: Modelo){
return this.http.post(this.api + '/modelo',model)
}

vermodelos(){
  return this.http.get(this.api + '/modelo')
}


vermodelo(id: string): Observable<Modelo>{
  return this.http.get<Modelo>(this.api + '/modelo/' +id)
}


editarmodelo(id: String, model: Modelo): Observable<Modelo> {
  return this.http.put<Modelo>(`${this.api}/modelo/${id}`, model);
}


eliminarmodelo(id: string){
return this.http.delete(this.api + '/modelo/' +id)
}



//series
crearserie(serie: Serie){
  return this.http.post(this.api + '/serie', serie)
}


verseries(){
  return this.http.get(this.api + '/serie')
}



verserie(id: string): Observable<Serie>{
  return this.http.get<Serie>(this.api + '/serie/' +id)
}


editarserie(id: String, serie: Serie): Observable<Serie> {
  return this.http.put<Serie>(`${this.api}/serie/${id}`, serie);
}

eliminarserie(id: string){
return this.http.delete(this.api + '/serie/' +id)
}

}
