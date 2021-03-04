import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ReviewModelService } from 'src/app/services/review-model.service';
import { Review } from '../../types/review'
import * as uuid from 'uuid';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  data: Array<Review>;
  business: Params;
  id : string;

  constructor(private model: ReviewModelService, private route: ActivatedRoute) {
    this.getBusines();
    this.data = model.getData(this.business["businessid"]);
    this.id = uuid.v4();
   }

  ngOnInit(): void {
  }

  getBusiness(){
    return this.business["businessid"];
  }

  newId(){
    return this.id;
  }

  getCity(){
    return this.business["cityid"];
  }

  getBusines(){
    this.route.params.subscribe( params => {
      this.business = params;
  });
  }

}
