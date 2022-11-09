//Servicio que usamos para pasar información hacia los componentes

import { Injectable } from '@angular/core';
import { Tema } from './tema';
import { TEMAS } from './datos/mock_programa';

@Injectable({
  providedIn: 'root'
})
export class ProgramacionService {

  //Nos creamos una variable para almacenar los datos de los temas
  listaTemas:Tema[] = [];
  detalleTema?:Tema;

  constructor() { this.listaTemas = TEMAS }

  //metodo para devolver la lista de temas

  getTemas():Tema[]{
    return this.listaTemas;
  }
  //Metodo para obtener los detalles del tema que le pidamos por el id
  getDetalleTema(id:number):Tema{
    //Con esta linea buscamos en el array de temas aquel con el cual coincide la id que hemos enviado
    const tema = this.listaTemas.find(t=>t.tema = id);
    return tema;
  }

  //Metodo para añadir un tema
  setTema(tema:Tema):void{
    this.listaTemas.push(tema)
  }

}
