import { Component } from '@angular/core';
import { DiceDisplayComponent } from './Components/dice-display/dice-display.component';
import { DiceSelectComponent } from './Components/dice-select/dice-select.component';

@Component({
<<<<<<< HEAD
  selector: 'app-root',
  imports: [RouterOutlet],
  standalone: true,
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {}
=======
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
>>>>>>> 584e31766b57888bea5e1daa9cc813b5dd1343a1
