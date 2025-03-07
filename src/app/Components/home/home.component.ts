import { Component } from '@angular/core';
import { DiceDisplayComponent } from '../dice-display/dice-display.component';
import { DiceSelectComponent } from '../dice-select/dice-select.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'home',
  imports: [DiceDisplayComponent,DiceSelectComponent,MenuComponent,],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  menuHidden = true;

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }
}