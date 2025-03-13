import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  // cantidad de caras del dado
  private _diceType: number = 20

  //valor actual del dado
  private _randomNumber: number = Math.floor(Math.random() * this._diceType) + 1;

  // Método para obtener el número
  get randomNumber(): number {
    return this._randomNumber;
  }

  // Método para obtener el tipo de dado
  get diceType(): number{
    return this._diceType;
  }

  // Método para actualizarlo con un número aleatorio
  generateRandomNumber(): void {
    this._randomNumber = Math.floor(Math.random() * this._diceType) + 1;
  }

  // Método para actualizar el tipo de dado
  setDiceType(newDiceType: number): void {
    this._diceType = newDiceType;
  }

  constructor() { }
}
