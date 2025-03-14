import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) { }

  navigateToAbout() {
    this.router.navigate(['/aboutus']);
  }
  navigateToContactUs() {
    this.router.navigate(['/contact']);
  }
  navigateToCourses() {
    this.router.navigate(['/courses']);
  }

  navigateToNews() {
    this.router.navigate(['/news']);
  }
  navigateToRegister() {
    this.router.navigate(['/register']);
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
