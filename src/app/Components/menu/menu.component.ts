import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private authService: AuthService, private router: Router) {}

  isHidden: boolean = true;

  toggleMenu(): void {
    this.isHidden = !this.isHidden;
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}