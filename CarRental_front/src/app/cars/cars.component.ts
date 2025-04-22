import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Car, cars } from '../cars';
import { CommonModule, NgFor, NgIf, ViewportScroller } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cars',
  imports: [RouterLink, NgFor, NgIf, FormsModule, CommonModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  currentYear = new Date().getFullYear();
  featuredCars: Car[] = cars

  constructor(private viewportScroller: ViewportScroller, public authService: AuthService) {}

  onRentCar(car: Car) {
    alert(`You selected: ${car.make}\nBooking functionality would be implemented here!`);
  }

  scrollTo(anchor: string): void {
    this.viewportScroller.scrollToAnchor(anchor);
  }
}
