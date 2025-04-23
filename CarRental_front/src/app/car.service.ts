import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from './cars';
import { Dealer } from './dealers';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = 'http://127.0.0.1:8000/api/cars/upload/';
  private listUrl = 'http://127.0.0.1:8000/api/cars/list/';  
  private dealURL = 'http://127.0.0.1:8000/api/cars/dealer/'

  constructor(private http: HttpClient) { }

  addCar(carData: any, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });

    return this.http.post(this.apiUrl, carData, { headers });
  }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.listUrl)
  }

  getCarsByDealer(dealerr: number): Observable<any> {
    return this.http.get(`http://127.0.0.1:8000/api/cars/dealer-cars/${dealerr}/`);
  }

  getDealers(): Observable<Dealer[]> {
    return this.http.get<Dealer[]>(this.dealURL)
  }
}
