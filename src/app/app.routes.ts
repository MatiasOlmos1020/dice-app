import { Routes } from '@angular/router';
import { DiceDisplayComponent } from './Components/dice-display/dice-display.component';
import { DiceSelectComponent } from './Components/dice-select/dice-select.component';
import { HomeComponent } from './Components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dice-select', component: DiceSelectComponent },
  //{ path: '**', redirectTo: '' } // Redirige a Home si la ruta no existe
];