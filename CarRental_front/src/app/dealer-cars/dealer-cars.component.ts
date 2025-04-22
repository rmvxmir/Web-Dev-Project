import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Car, cars } from '../cars';
import { NgFor, NgIf, ViewportScroller } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dealer-cars',
  imports: [NgFor, FormsModule, NgIf, RouterLink],
  templateUrl: './dealer-cars.component.html',
  styleUrl: './dealer-cars.component.css'
})
export class DealerCarsComponent implements OnInit {
  dealer: Car | undefined
  currentYear = new Date().getFullYear();

  constructor(private route: ActivatedRoute, private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    const getRoute = this.route.snapshot.paramMap
    const currentRoute = String(getRoute.get("dealer"))

    this.dealer = cars.find(f => f.dealer.toLowerCase() === currentRoute)
  }

  scrollTo(anchor: string): void {
    this.viewportScroller.scrollToAnchor(anchor);
  }
}