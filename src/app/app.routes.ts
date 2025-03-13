import { Routes } from '@angular/router';
import { DiceSelectComponent } from './Components/dice-select/dice-select.component';
import { HomeView } from './views/home/home.view';
import { CreateDiceView } from './views/create-dice/create-dice.view';

export const routes: Routes = [
  { path: '', component: HomeView },
  { path: 'create-dice', component: CreateDiceView },
  //{ path: '**', redirectTo: '' } // Redirige a Home si la ruta no existe
];