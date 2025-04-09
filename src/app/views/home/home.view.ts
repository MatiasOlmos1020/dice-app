import { Component } from '@angular/core';
import { DiceDisplayComponent } from '../../Components/dice-display/dice-display.component';
import { DiceSelectComponent } from '../../Components/dice-select/dice-select.component';
import { CustomDicesSelectComponent } from '../../Components/custom-dices-select/custom-dices-select.component';

@Component({
  imports: [DiceDisplayComponent,DiceSelectComponent,CustomDicesSelectComponent],
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.css']
})
export class HomeView {
 
}