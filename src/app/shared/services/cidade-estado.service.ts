import { Injectable } from '@angular/core';

const estados: string[] = [
  'Amazonas',
  'Roraima',
  'Pará',
  'São Paulo',
  'Belo Horizonte'
];

const cidades: string[] = [
  'Amazonas',
  'Roraima',
  'Pará',
  'São Paulo',
  'Belo Horizonte'
];


@Injectable()
export class Service {

  getEstados(): string[] {
    return estados;
  }

  getCidades(): string[] {
    return cidades;
  }

}

