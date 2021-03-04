import { Injectable } from '@angular/core';
import { City } from '../types/city';
import cities from '../../assets/cityData.json';
@Injectable({
  providedIn: 'root'
})
export class CityModelService {
  data: Array<City> = cities;

  constructor() {
    this.data = localStorage.getItem("cities") !== null ? 
    JSON.parse(localStorage.getItem("cities")) 
    : cities;
   }

   getData(){
      localStorage.setItem('cities', JSON.stringify(this.data));
      return this.data;
   }   
}
