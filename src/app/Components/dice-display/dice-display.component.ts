import { Component } from '@angular/core';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'dice-display',
  templateUrl: './dice-display.component.html',
  styleUrl: './dice-display.component.css'
})
export class DiceDisplayComponent {
  constructor(private globalService: GlobalService){}

  get number(): number {
    return this.globalService.randomNumber
  }

  generateRandomNumber(): void {
    this.globalService.generateRandomNumber();
  }
}