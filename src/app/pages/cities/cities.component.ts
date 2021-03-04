import { Component, OnInit } from '@angular/core';
import { CityModelService } from 'src/app/services/city-model.service';
import { City } from '../../types/city';
import { BusinessModelService } from 'src/app/services/business-model.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  
  data: Array<City>;

  constructor(private model : CityModelService, private b: BusinessModelService) { 
    this.data = model.getData();
  }
  ngOnInit(): void {}

  getTotalReviewed(){
    return this.b.getTotalReviewed();
  }
}
