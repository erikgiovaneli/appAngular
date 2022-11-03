import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Estado} from "../../models/estado";
import {map, Observable} from "rxjs";
import {Cidade} from "../../models/cidade";
import DevExpress from "devextreme";

@Injectable()
export class CidadeEstadoService {

  constructor(private http: HttpClient) {
  }
  getEstados(): Observable<Estado[]> {
    return this.http.get<Estado[]>("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome");
  }

  getCidades(UF: string): Observable<Cidade[]>{
    return this.http.get<Cidade[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+ UF +'/municipios?orderBy=nome');
  }

}

