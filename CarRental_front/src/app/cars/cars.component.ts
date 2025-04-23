import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Car } from '../cars';
import { CommonModule, NgFor, NgIf, ViewportScroller } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CarService } from '../car.service';

@Component({
  selector: 'app-cars',
  imports: [RouterLink, NgFor, NgIf, FormsModule, CommonModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements OnInit {
  currentYear = new Date().getFullYear();
  featuredCars: Car[] = []

  constructor(private viewportScroller: ViewportScroller, public authService: AuthService, private carService: CarService) {}

  ngOnInit(): void {
      this.carService.getCars().subscribe((cars) => {
        this.featuredCars = cars
      })
  }

  onRentCar(car: Car) {
    alert(`You selected: ${car.make}\nBooking functionality would be implemented here!`);
  }

  scrollTo(anchor: string): void {
    this.viewportScroller.scrollToAnchor(anchor);
  }
}
