import { Component, OnInit } from '@angular/core';
import {Business} from '../../types/business';
import { BusinessModelService } from 'src/app/services/business-model.service';
import { ActivatedRoute, Params } from '@angular/router';
import * as uuid from 'uuid';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
  id: string;
  city : Params;
  data: Array<Business>;

  constructor(private model: BusinessModelService, private route: ActivatedRoute) { 
      this.getParams();
      this.data = model.getData(this.city['cityid']);
      this.id = uuid.v4();
  }

  ngOnInit(): void {
  }

  getCity(){
    return this.city['cityid'];
  }

  newId(){
    return this.id;
  }

  getParams(){
    this.route.params.subscribe( params => {
      this.city = params;
  });
  }

  getAvgReview(business: string){
    return this.model.getAvgReview(business);
  }

  getReviews(business: string){
    return this.model.getReviews(business);
  }

}
