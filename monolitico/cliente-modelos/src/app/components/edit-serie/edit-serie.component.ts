import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Serie } from 'src/app/interfaces/serie/serie';
import { ModeloImpresoraService } from 'src/app/services/modelo-impresora.service';

@Component({
  selector: 'app-edit-serie',
  templateUrl: './edit-serie.component.html',
  styleUrls: ['./edit-serie.component.css']
})
export class EditSerieComponent implements OnInit {
serie: Serie = {
  nombre: '',
  marca: '',
  tipo: ''
}

constructor(private servicio: ModeloImpresoraService, private router: Router,
  private activate: ActivatedRoute
  ){}
  ngOnInit(): void {
    const params = this.activate.snapshot.params;
    if(params){
    this.servicio.verserie(params['id']).subscribe(
      res =>{
          this.serie = res
      }
    )
    }
}



editar(){
  delete this.serie.__v;
  let id: String | undefined = this.serie._id;
  if (id) {
    delete this.serie._id;
    this.servicio.editarserie(id, this.serie)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/serie']);
        },
        error => {
          console.error(error);
        }
      );
  } else {
    console.error("El ID del serie es undefined. No se puede llamar a editarserie con un valor undefined.");
  }
}
}



