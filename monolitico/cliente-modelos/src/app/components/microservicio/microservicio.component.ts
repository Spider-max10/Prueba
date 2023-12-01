import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modelo } from 'src/app/interfaces/modelo/modelo';
import { Serie } from 'src/app/interfaces/serie/serie';
import { MicroservicioReparacionService } from 'src/app/services/microservicio-reparacion.service';
import { ModeloImpresoraService } from 'src/app/services/modelo-impresora.service';

@Component({
  selector: 'app-microservicio',
  templateUrl: './microservicio.component.html',
  styleUrls: ['./microservicio.component.css']
})
export class MicroservicioComponent implements OnInit {
modelos: any;
series: any;

modelo: Modelo = {
  tipo: '',
  modelo: '',
  vida_util: ''
}

serie: Serie = {
  nombre: '',
  marca: '',
  tipo: ''
}

constructor(private microservicio: MicroservicioReparacionService,
  private servicio: ModeloImpresoraService,
  private router: Router
  ){}
ngOnInit(): void {
    this.ver();
    this.ver2();
}

ver(){
  this.microservicio.ver().subscribe(
    res=>{
      this.modelos = res
    }
  )
}

ver2(){
  this.microservicio.verseries().subscribe(
    res => {
      this.series = res
    }
  )
}

reparadomodelo(id: string,tipo: string,modelo: string, vida_util: string){
let entregar = this.modelo = {
  tipo: tipo,
  modelo: modelo,
  vida_util: vida_util
}

this.servicio.crearmodelo(entregar).subscribe(
  res=>{
    alert('Modelo raparado')
    this.router.navigate(['/modelo'])
  }
)

this.microservicio.eliminar(id).subscribe()
}


reciclarmodelo(id: string){
  this.microservicio.eliminar(id).subscribe(
    res =>{
      alert('Modelo reciclado')
        this.ver();
  })
}



reparadoserie(id: string,nombre: string,marca: string, tipo: string){
  let entregar = this.serie = {
    nombre: nombre,
    marca: marca,
    tipo: tipo
  }
  
  this.servicio.crearserie(entregar).subscribe(
    res=>{
      alert('Serie raparada')
      this.router.navigate(['/serie'])
    }
  )
  
  this.microservicio.eliminarserie(id).subscribe()
  }
  
  
  reciclarserie(id: string){
    this.microservicio.eliminarserie(id).subscribe(
      res =>{
        alert('Serie reciclada')
          this.ver2();
    })
  }

}
