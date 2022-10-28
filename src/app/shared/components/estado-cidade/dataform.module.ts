import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {EstadoCidadeComponent} from "./estado-cidade.component";



@NgModule({
  declarations: [EstadoCidadeComponent],
  exports: [
    EstadoCidadeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class DataformModule { }
