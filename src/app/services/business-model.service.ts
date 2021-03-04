import { Injectable } from '@angular/core';
import { Business } from '../types/business';
import businesses from '../../assets/businessData.json';
import { Review } from '../types/review';
import reviews from '../../assets/reviewData.json';

@Injectable({
  providedIn: 'root'
})
export class BusinessModelService {
  data : Array<Business> = businesses;
  reviewData: Array<Review> = reviews;

  constructor() { 
    this.data = localStorage.getItem("businesses") !== null ? 
    JSON.parse(localStorage.getItem("businesses")) 
    : businesses;
  }

  getAllData(c: string){
    var temp : Array<Business> = [];
    for(let b of this.data){
        temp.push(b);
    }
    localStorage.setItem('allbusinesses', JSON.stringify(temp));
    return temp;
  }

  getData(c : string){
    var temp : Array<Business> = [];
    for(let b of this.data){
      if(c == b.city && this.getReviews(b.businessid)>= 1){
        temp.push(b);
      }
    }
    localStorage.setItem('businesses', JSON.stringify(temp));
    return temp;
  }

  getAvgReview(bus: string){
    var count : number = 0;
    var rating : number = 0;
      for(let r of this.reviewData){
         if(bus == r.business){
            count++;
            rating+= r.rating;
         }
      }
      return rating/count;
  }

  getReviews(b : string){
    var total = 0;
      for(let r of this.reviewData){
        if(b == r.business){
          total +=1;
        }
      }
      return total;
  }

  getTotalReviewed(){
    var total = 0;
    for(let r of this.reviewData){
      for (let result of this.data){
        if(result.businessid == r.business){
          total +=1;
        }
      }
    }
    return total;
  }
}
