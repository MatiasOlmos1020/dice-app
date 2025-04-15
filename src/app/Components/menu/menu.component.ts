import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isHidden = true;

  @ViewChild('menuButton', { static: true }) menuButton!: ElementRef;

  constructor(
    private authService: AuthService,
    private router: Router,
    private elementRef: ElementRef
  ) {}

  toggleMenu(): void {
    this.isHidden = !this.isHidden;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const clickedInsideMenu = this.elementRef.nativeElement.contains(event.target);
    const clickedButton = this.menuButton.nativeElement.contains(event.target);
    
    if (!clickedInsideMenu && !clickedButton && !this.isHidden) {
      this.isHidden = true;
    }
  }
}
