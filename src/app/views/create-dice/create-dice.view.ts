import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DiceService } from '../../services/dice.service';
import { ImageService } from '../../services/image.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-create-dice',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-dice.view.html',
  styleUrls: ['./create-dice.view.css']
})
export class CreateDiceView {
  diceName: string = '';
  faces: { faceNumber: number; file: File | null; image?: string }[] = [];

  constructor(
    private diceService: DiceService,
    private imageService: ImageService,
    private router: Router,
  ) { }

  addFace() {
    this.faces.push({
      faceNumber: this.faces.length + 1,
      file: null
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

  onFileSelected(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];

      const allowedTypes = ['image/jpeg', 'image/png'];
      if (!allowedTypes.includes(file.type)) {
        alert('❌ Solo se permiten imágenes JPG o PNG.');
        return;
      }

      this.faces[index].file = file;
    }
  }

  async uploadDice() {
    if (!this.diceName.trim()){
      alert('❌ El dado debe tener un nombre.');
      return;
    }

    if(this.faces.length === 0){
      alert('❌ El dado debe tener al menos una cara');
      return;
    }

    const uploadPromises = this.faces.map(async (face, i) => {
      if (!face.file) {
        return {
          faceNumber: face.faceNumber,
          image: ""
        };
      }

      try {
        const imageUrl = await this.imageService.uploadImage(face.file);
        return {
          faceNumber: face.faceNumber,
          image: imageUrl
        };
      } catch (err) {
        throw new Error(`Error al subir imagen de la cara #${i + 1}`);
      }
    });

    try {
      const uploadedFaces = await Promise.all(uploadPromises);

      const dice = {
        name: this.diceName,
        faceQty: uploadedFaces.length,
        faces: uploadedFaces
      };

      this.diceService.createDice(dice).subscribe({
        next: (response) => {
          console.log('Dado creado:', response);
          alert('✅ Dado creado con éxito');
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Error al crear dado:', error);
          alert('❌ Error al crear el dado');
        }
      });
    } catch (error) {
      console.error('❌ Error al subir imágenes o crear el dado:', error);
      alert('❌ Error al subir imágenes o crear el dado');
    }
  }
}