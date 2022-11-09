import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTemasComponent } from './lista-temas/lista-temas.component';
import { ComponentFixture } from '@angular/core/testing';
import { ListaCompletaTemasComponent } from './lista-completa-temas/lista-completa-temas.component';
import { DetalleTemaComponent } from './detalle-tema/detalle-tema.component';
import { NuevoTemaComponent } from './nuevo-tema/nuevo-tema.component';

const routes: Routes = [

  //Ruta lista de temas
  {
    path:'temas',
    component:ListaTemasComponent
  },
  //Ruta lista completa de temas
  {
    path:'lista_completa',
    component:ListaCompletaTemasComponent
  },
  //Ruta de los detalles de los temas
  {
    path:'detalle/:num',
    component:DetalleTemaComponent
  },
  //Ruta a elemento no existente
  {
    path:'**',
    redirectTo:'/temas',
    pathMatch:'full'
  },
  //Ruta a nuevo tema
  {
    path:'nuevo_tema',
    component:NuevoTemaComponent
  },
  //Ruta para editar temas
  {
    path:'editar_tema',
    component:NuevoTemaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
