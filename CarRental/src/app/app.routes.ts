import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CarsComponent } from './cars/cars.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'cars',
    component: CarsComponent
  },
  {
    path: 'service',
    component: ServicesComponent
  }
];
