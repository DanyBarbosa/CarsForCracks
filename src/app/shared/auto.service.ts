import { Injectable } from '@angular/core';
import { Automovil } from '../automovil';
import { AUTOS } from '../automoviles';

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  private autos: Automovil[] = AUTOS;
  constructor() { }

  getAutos(): Automovil[]{
    return this.autos;
  }
}