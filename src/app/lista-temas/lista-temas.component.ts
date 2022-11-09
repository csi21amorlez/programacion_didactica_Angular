import { Component, OnInit } from '@angular/core';
import { Tema } from '../tema';
import { ProgramacionService } from '../programacion.service';

@Component({
  selector: 'app-lista-temas',
  templateUrl: './lista-temas.component.html',
  styleUrls: ['./lista-temas.component.css']
})
export class ListaTemasComponent implements OnInit {

  //Propiedad para mandar datos al html
  temas:Tema[] = [];

  constructor(private servTemas:ProgramacionService) {
   }

  ngOnInit(): void {
  }

  //Nos traemos los temas a nuestra propiedad local
  getTemas():void{
    this.temas = this.servTemas.getTemas();
  }


}
