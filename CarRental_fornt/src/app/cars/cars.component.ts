import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Car, cars } from '../cars';
import { NgFor, NgIf, ViewportScroller } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cars',
  imports: [RouterLink, NgFor, NgIf, FormsModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  currentYear = new Date().getFullYear();
  featuredCars: Car[] = cars

  constructor(private viewportScroller: ViewportScroller) {}

  onRentCar(car: Car) {
    alert(`You selected: ${car.make}\nBooking functionality would be implemented here!`);
  }

  scrollTo(anchor: string): void {
    this.viewportScroller.scrollToAnchor(anchor);
  }
}
