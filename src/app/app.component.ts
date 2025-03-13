import { Component } from '@angular/core';
import { DiceDisplayComponent } from './Components/dice-display/dice-display.component';
import { DiceSelectComponent } from './Components/dice-select/dice-select.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  standalone: true,
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {}

