import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Car, cars } from '../cars';
import { CommonModule, NgFor, NgIf, ViewportScroller } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarService } from '../car.service';

@Component({
  selector: 'app-dealer-cars',
  imports: [NgFor, FormsModule, NgIf, RouterLink, CommonModule],
  templateUrl: './dealer-cars.component.html',
  styleUrl: './dealer-cars.component.css'
})
export class DealerCarsComponent implements OnInit {
  dealer: number = 0
  carss: any[] = []
  currentYear = new Date().getFullYear();

  constructor(private route: ActivatedRoute, private viewportScroller: ViewportScroller, private carService: CarService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(p => {
      this.dealer = Number(p.get('dealer'));
      this.fetchCars()
    })
  }

  fetchCars(): void {
    this.carService.getCarsByDealer(this.dealer).subscribe({
      next: (data) => {this.carss = data;
        console.log('Cars data received:', data);
      },
      error: (err) => console.error("Failed, the error is in 31st line.", err)
    })
  }

  scrollTo(anchor: string): void {
    this.viewportScroller.scrollToAnchor(anchor);
  }
}