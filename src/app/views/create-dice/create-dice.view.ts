// src/app/views/create-dice.view.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DiceService } from '../../services/dice.service';

@Component({
  standalone: true,
  selector: 'app-create-dice',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-dice.view.html',
  styleUrls: ['./create-dice.view.css']
})
export class CreateDiceView {
  faces: { faceNumber: number; image: string }[] = [];

  constructor(private diceService: DiceService) {}

  addFace() {
    this.faces.push({
      faceNumber: this.faces.length + 1,
      image: ''
    });
  }

  removeFace(index: number) {
    this.faces.splice(index, 1);
    this.reorderFaces();
  }

  reorderFaces() {
    this.faces.forEach((face, index) => {
      face.faceNumber = index + 1;
    });
  }

  uploadDice() {
    const dice = {
      faceQty: this.faces.length,
      faces: this.faces
    };

    this.diceService.createDice(dice).subscribe({
      next: (response) => {
        console.log('Dado creado:', response);
        alert('✅ Dado creado con éxito');
      },
      error: (error) => {
        console.error('Error al crear dado:', error);
        alert('❌ Error al crear el dado');
      }
    });
  }
}
