import { Component, OnInit } from '@angular/core';
import { MicroservicioComponent } from '../microservicio/microservicio.component';
import { Serie } from 'src/app/interfaces/serie/serie';
import { ModeloImpresoraService } from 'src/app/services/modelo-impresora.service';
import { MicroservicioReparacionService } from 'src/app/services/microservicio-reparacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit{
serie: Serie = {
  nombre: '',
  marca: '',
  tipo: ''
}   
series: any;
  constructor(private servicio: ModeloImpresoraService, private microservicio: MicroservicioReparacionService,
    private router: Router
    ){}
  ngOnInit(): void {
    this.ver();
}

crear(){
this.servicio.crearserie(this.serie).subscribe(
  res=>{
    this.ver();
  }
)
}

reparar(id: string, nombre: string, marca: string, tipo: string){
let reparar = this.serie = {
  nombre: nombre,
  marca: marca,
  tipo: tipo
}

this.servicio.eliminarserie(id).subscribe(
  res=>{
    this.ver();
  }
)

this.microservicio.crearserie(reparar).subscribe(
  res=>{
   alert('Se movio serie al taller de reparaciones')
   this.router.navigate(['/micro'])
  }
)

}


ver(){
  this.servicio.verseries().subscribe(
    res=>{
        this.series = res
    }
  )
}

}
