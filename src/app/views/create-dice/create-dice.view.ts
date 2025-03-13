import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule,FormsModule],
  templateUrl: './create-dice.view.html',
  styleUrls: ['./create-dice.view.css']
})
export class CreateDiceView {
  faces: { faceNumber: number; image: string }[] = [];

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

  generateJson() {
    const dice = {
      faceQty: this.faces.length,
      faces: this.faces
    };
    console.log(JSON.stringify(dice, null, 2)); // Muestra el JSON en consola
  }
}