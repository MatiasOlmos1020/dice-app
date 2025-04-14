import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global.service';
import { Face } from '../../models/dice.model';
import { CommonModule,NgIf } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'dice-display',
  imports: [CommonModule,NgIf],
  templateUrl: './dice-display.component.html',
  styleUrl: './dice-display.component.css'
})
export class DiceDisplayComponent {
  constructor(private globalService: GlobalService){}

  get curentFace(): Face | null {
    return this.globalService.currentFace
  }

  generateRandomNumber(): void {
    this.globalService.generateRandomFace();
  }
}