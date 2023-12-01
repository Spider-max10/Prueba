import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Modelo } from 'src/app/interfaces/modelo/modelo';
import { ModeloImpresoraService } from 'src/app/services/modelo-impresora.service';

@Component({
  selector: 'app-edit-modelo',
  templateUrl: './edit-modelo.component.html',
  styleUrls: ['./edit-modelo.component.css']
})
export class EditModeloComponent implements OnInit{
modelo: Modelo = {
  tipo: '',
  modelo: '',
  vida_util: ''
}
  constructor(private servicio: ModeloImpresoraService,
    private router: Router, private activate: ActivatedRoute){}
  ngOnInit(): void {
    const params = this.activate.snapshot.params;
    if(params){
      this.servicio.vermodelo(params['id']).subscribe(
        res  =>{
            this.modelo = res
        }
      )
    }
}

editar() {
  delete this.modelo.__v;
  let id: String | undefined = this.modelo._id;
  if (id) {
    delete this.modelo._id;
    this.servicio.editarmodelo(id, this.modelo)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/modelo']);
        },
        error => {
          console.error(error);
        }
      );
  } else {
    console.error("El ID del modelo es undefined. No se puede llamar a editarmodelo con un valor undefined.");
  }
}
}
