import { Routes } from '@angular/router';
import { DiceSelectComponent } from './Components/dice-select/dice-select.component';
import { HomeView } from './views/home/home.view';
import { CreateDiceView } from './views/create-dice/create-dice.view';
import { ListDicesView } from './views/list-dices/list-dices.view';

export const routes: Routes = [
  { path: '', component: HomeView },
  { path: 'create-dice', component: CreateDiceView },
  { path: 'list-dices', component: ListDicesView },
  //{ path: '**', redirectTo: '' } // Redirige a Home si la ruta no existe
];