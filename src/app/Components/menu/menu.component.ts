import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isHidden: boolean = true;

  toggleMenu(): void {
    this.isHidden = !this.isHidden;
  }
}