import { Component, OnInit } from '@angular/core';
import DevExpress from "devextreme";
import {Service} from "../../services/cidade-estado.service";

@Component({
  selector: 'app-estado-cidade',
  templateUrl: './estado-cidade.component.html',
  styleUrls: ['./estado-cidade.component.scss'],
  providers: [Service],
})
export class EstadoCidadeComponent implements OnInit {

  estados: string[];
  cidades: string[];

  constructor(service: Service) {
    this.estados = service.getEstados();
    this.cidades = service.getCidades();
  }

  ngOnInit(){

  }
}
