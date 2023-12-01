import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modelo } from 'src/app/interfaces/modelo/modelo';
import { MicroservicioReparacionService } from 'src/app/services/microservicio-reparacion.service';
import { ModeloImpresoraService } from 'src/app/services/modelo-impresora.service';

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styleUrls: ['./modelo.component.css']
})
export class ModeloComponent implements OnInit {

modelo: Modelo = {
  tipo: '',
  modelo: '',
  vida_util: ''
}
modelos: any;

  constructor(private servicio: ModeloImpresoraService, private microservicio: MicroservicioReparacionService,
   private router: Router    
    ){}
  ngOnInit(): void {
    this.ver();
}

crear(){
this.servicio.crearmodelo(this.modelo).subscribe(
res =>{
  this.ver();
}
)
}


ver(){
  this.servicio.vermodelos().subscribe(
    res=>{
       this.modelos = res;
    }
  )
}






reparar(id: string,tipo: string,modelo:string,vida_util: string){
  let envia = this.modelo = {
    tipo: tipo,
    modelo: modelo,
    vida_util: vida_util
  }
this.servicio.eliminarmodelo(id).subscribe(
  res=>{
   this.ver();
  }
)
this.microservicio.crear(envia).subscribe(
  res=>{
   alert('Se movio al taller de reparaciones')
   this.router.navigate(['/micro'])
  }
)


}




}
