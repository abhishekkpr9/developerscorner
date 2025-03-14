/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { CarouselComponent, CarouselInnerComponent, CarouselItemComponent, ThemeDirective } from '@coreui/angular';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-home',
  imports: [CarouselComponent, CarouselInnerComponent, CarouselItemComponent, ThemeDirective, HeaderComponent, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });
  ngOnInit(): void {
    this.slides[0] = {
      src: 'assets/images/course_1.jpg'
    };
    this.slides[1] = {
      src: 'assets/images/course_2.jpg'
    };
    this.slides[2] = {
      src: 'assets/images/course_3.jpg'
    };
  }

  navigateToAbout() {
    this.router.navigate(['/aboutus']);
  }
  navigateToContactUs() {
    this.router.navigate(['/contact']);
  }
  navigateToCourses() {
    this.router.navigate(['/courses']);
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
  navigateToNews() {
    this.router.navigate(['/news']);
  }
}
