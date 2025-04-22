import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CarsComponent } from './cars/cars.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard } from './guards/auth.guard';
import { DealerCarsComponent } from './dealer-cars/dealer-cars.component';

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
    component: ServicesComponent,
    canActivate: [authGuard]
  },
  {
    path: 'service/:dealer',
    component: DealerCarsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];
