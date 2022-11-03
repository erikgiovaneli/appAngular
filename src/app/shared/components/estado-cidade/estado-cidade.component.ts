import { Component, OnInit } from '@angular/core';
import {CidadeEstadoService} from "../../services/cidade-estado.service";
import {Estado} from "../../../models/estado";
import {Cidade} from "../../../models/cidade";
import DevExpress from "devextreme";
import notify = DevExpress.ui.notify;

@Component({
  selector: 'app-estado-cidade',
  templateUrl: './estado-cidade.component.html',
  styleUrls: ['./estado-cidade.component.scss'],
  providers: [CidadeEstadoService],
})
export class EstadoCidadeComponent implements OnInit {

  estados: Estado[] = [];
  siglaEstado: string = '';
  cidades: Cidade[] = [];

  constructor(private service: CidadeEstadoService) {
  }

  ngOnInit(){
    this.service.getEstados().subscribe((e) => {
      this.estados = e;
    })
  }

  onValueChanged(e: any) {
    this.siglaEstado = e.value;

    this.service.getCidades(this.siglaEstado).subscribe((c) =>{
      this.cidades = c;
    });
  }

}
