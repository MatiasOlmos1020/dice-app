import { Injectable } from '@angular/core';
import { Dice, Face } from './models/dice.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private _currentDice: Dice | null = null;
  private _currentFace: Face | null = null;

  constructor() { }

  // Setter del dado actual
  setDice(dice: Dice): void {
    this.generateRandomFace();
    this._currentDice = dice;
  }

  // obtener del dado actual
  get dice(): Dice | null {
    return this._currentDice;
  }

  // Obtener la cara actual
  get currentFace(): Face | null {
    return this._currentFace;
  }

  // Generar una cara aleatoria del dado actual
  generateRandomFace(): void {
    if (!this._currentDice || this._currentDice.faces.length === 0) {
      this._currentFace = null;
      return;
    }

    const randomIndex = Math.floor(Math.random() * this._currentDice.faces.length);
    this._currentFace = this._currentDice.faces[randomIndex];
  }

  // Obtener el número de caras del dado actual
  get faceQty(): number {
    return this._currentDice?.faceQty ?? 0;
  }
}
