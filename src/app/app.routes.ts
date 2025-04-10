import { Routes } from '@angular/router';
import { HomeView } from './views/home/home.view';
import { CreateDiceView } from './views/create-dice/create-dice.view';
import { ListDicesView } from './views/list-dices/list-dices.view';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { authGuard } from './guards/auth.guard';
import { guestGuard } from './guards/guest.guard';

export const routes: Routes = [
  //rutas inaccesibles si logueado
  { path: 'register',canActivate: [guestGuard], component: RegisterComponent },
  { path: 'login',canActivate: [guestGuard], component: LoginComponent },


  //Rutas protegidas
  { path: '',canActivate: [authGuard], component: HomeView },
  { path: 'create-dice',canActivate: [authGuard], component: CreateDiceView },
  { path: 'list-dices',canActivate: [authGuard], component: ListDicesView },
  //{ path: '**', redirectTo: '' } // Redirige a Home si la ruta no existe
];