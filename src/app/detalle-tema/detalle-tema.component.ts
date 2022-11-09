import { Component, OnInit } from '@angular/core';
import { Tema } from '../tema';
import { ProgramacionService } from '../programacion.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-tema',
  templateUrl: './detalle-tema.component.html',
  styleUrls: ['./detalle-tema.component.css'],
})
export class DetalleTemaComponent implements OnInit {
  numTema: number = 1;
  temaActual?: Tema;

  constructor(
    private servDetalleTemas: ProgramacionService,
    private ruta: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.temaActual = this.servDetalleTemas.getDetalleTema(this.temaActual.tema)
  }
}
