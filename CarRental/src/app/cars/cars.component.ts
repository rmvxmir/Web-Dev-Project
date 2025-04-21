import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Car, cars } from '../cars';
import { NgFor, NgIf } from '@angular/common';
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


  onRentCar(car: Car) {
    alert(`You selected: ${car.make}\nBooking functionality would be implemented here!`);
  }
}
