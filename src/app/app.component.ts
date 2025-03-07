import { Component } from '@angular/core';
import { DiceDisplayComponent } from './Components/dice-display/dice-display.component';
import { DiceSelectComponent } from './Components/dice-select/dice-select.component';

@Component({
  selector: 'app-root>',
  imports: [DiceDisplayComponent,DiceSelectComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuHidden = true;

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }
}