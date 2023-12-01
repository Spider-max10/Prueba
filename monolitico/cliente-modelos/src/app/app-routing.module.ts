import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ModeloComponent } from './components/modelo/modelo.component';
import { SerieComponent } from './components/serie/serie.component';
import { EditModeloComponent } from './components/edit-modelo/edit-modelo.component';
import { EditSerieComponent } from './components/edit-serie/edit-serie.component';
import { MicroservicioComponent } from './components/microservicio/microservicio.component';

const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'modelo',
  component: ModeloComponent
},
{
  path: 'serie',
  component: SerieComponent
},
{
  path: 'modelo/edit/:id',
  component: EditModeloComponent
},
{
  path: 'serie/edit/:id',
  component: EditSerieComponent
},
{
  path: 'micro',
  component:MicroservicioComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
