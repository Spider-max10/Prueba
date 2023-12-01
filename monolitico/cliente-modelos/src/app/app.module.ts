import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { HomeComponent } from './components/home/home.component';
import { ModeloComponent } from './components/modelo/modelo.component';
import { SerieComponent } from './components/serie/serie.component';
import { EditModeloComponent } from './components/edit-modelo/edit-modelo.component';
import { EditSerieComponent } from './components/edit-serie/edit-serie.component';
import { MicroservicioComponent } from './components/microservicio/microservicio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    HomeComponent,
    ModeloComponent,
    SerieComponent,
    EditModeloComponent,
    EditSerieComponent,
    MicroservicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
