import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

interface Car {
  image: string;
  make: string;
  fuelType: string;
  type: string;
  capacity: number;
  price: number;
}

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface Testimonial {
  text: string;
  author: string;
  role: string;
  avatar: string;
}

@Component({
  selector: 'app-home-page',
  imports: [FormsModule, NgFor, NgIf, ReactiveFormsModule, NgClass, RouterLink, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  navScrolled = false;
  currentYear = new Date().getFullYear();
  
  // Featured cars data
  featuredCars: Car[] = [
    {
      image: 'https://i.pinimg.com/736x/64/d4/da/64d4daec943260c734023be29a7027f1.jpg',
      make: 'Tesla Model S',
      fuelType: 'Electric',
      type: 'Sedan',
      capacity: 5,
      price: 129
    },
    {
      image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      make: 'Ford Mustang',
      fuelType: 'Premium',
      type: 'Sports',
      capacity: 4,
      price: 99
    },
    {
      image: 'https://i.pinimg.com/236x/f8/7b/c3/f87bc305efffdbc05cd3af0467171084.jpg',
      make: 'Jeep Wrangler',
      fuelType: 'Regular',
      type: 'SUV',
      capacity: 5,
      price: 89
    }
  ];

  // Benefits data
  benefits: Benefit[] = [
    {
      icon: 'fa-solid fa-tag',
      title: 'Best Prices',
      description: 'We guarantee the best prices for your rental. Found a better deal? We\'ll match it!'
    },
    {
      icon: 'fa-solid fa-car',
      title: 'Wide Selection',
      description: 'Choose from hundreds of vehicles including luxury cars, SUVs, and economy options.'
    },
    {
      icon: 'fa-solid fa-headset',
      title: '24/7 Support',
      description: 'Our customer service team is available around the clock to assist you with any issues.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Fully Insured',
      description: 'All our rentals come with comprehensive insurance coverage for your peace of mind.'
    }
  ];

  // Testimonials data
  testimonials: Testimonial[] = [
    {
      text: 'I\'ve rented from Velocity multiple times and they never disappoint. The cars are always clean, well-maintained, and the pricing is transparent with no hidden fees.',
      author: 'Michael Johnson',
      role: 'Frequent Traveler',
      avatar: 'https://i.pinimg.com/236x/40/95/3a/40953a1d68f161ab171afff4ef9bea92.jpg'
    },
    {
      text: 'The booking process was so easy and the staff was incredibly helpful when I needed to extend my rental last minute. Will definitely use Velocity again!',
      author: 'Sarah Williams',
      role: 'Business Traveler',
      avatar: 'https://i.pinimg.com/236x/a6/99/a9/a699a9ebb76ad60a4a164c7c4c715933.jpg'
    },
    {
      text: 'Rented a luxury car for our anniversary and it made the weekend extra special. The car was in perfect condition and pickup/dropoff was a breeze.',
      author: 'David Chen',
      role: 'Local Customer',
      avatar: 'https://i.pinimg.com/736x/e1/9e/b1/e19eb12d5bf236c2543cb38b297adc59.jpg'
    }
  ];

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.navScrolled = window.scrollY > 50;
  }

  onSearchSubmit() {
    // In a real app, this would call a service
    alert('Search functionality would be implemented here!');
  }

  onRentCar(car: Car) {
    alert(`You selected: ${car.make}\nBooking functionality would be implemented here!`);
  }
}