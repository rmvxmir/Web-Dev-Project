import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Dealer } from '../dealers';
import { CommonModule, NgFor, NgIf, ViewportScroller } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarService } from '../car.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-services',
  imports: [NgFor, NgIf, FormsModule, RouterLink, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  currentYear = new Date().getFullYear();
  dealer: Dealer[] = []
  
  carData = {
    image: '',
    make: '',
    fuel_type: '',
    car_type: '',
    capacity: 0,
    price: 0,
    publisher: '',
    dealer: 0
  };

  isPublisher: boolean = false;

  constructor(private router: Router, private viewportScroller: ViewportScroller, private carService: CarService, private authService: AuthService) {}

  ngOnInit() {
    const user = this.authService.getUser();
    if (user && user.is_dealer === true) {
      this.isPublisher = true;
      this.carData.publisher = user.username;
    }
    this.carService.getDealers().subscribe((dealers) => {
      this.dealer = dealers;
    })
  }

  onSubmit() {
    const token = this.authService.getToken();
    if (token) {
      this.carService.addCar(this.carData, token).subscribe({
        next: (response) => {
          console.log('Car added successfully', response);
        },
        error: (error) => {
          console.error('Error adding car', error);
        }
      });
    }
  }

  navigateToDealer(dealer: number) {
    this.router.navigate(['/service', dealer]);
  }

  scrollTo(anchor: string): void {
    this.viewportScroller.scrollToAnchor(anchor);
  }
}
