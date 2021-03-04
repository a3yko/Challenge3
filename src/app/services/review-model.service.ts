import { Injectable } from '@angular/core';
import {Review} from '../types/review';
import reviews from '../../assets/reviewData.json';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ReviewModelService {
  apiUrl = 'https://adrianatanasov.com/reviews';

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };


  data: Array<Review> = reviews;
  constructor(private http: HttpClient) { 
    this.data = localStorage.getItem("reviews") !== null ? 
    JSON.parse(localStorage.getItem("reviews")) 
    : reviews;
  }

  addReview (r: Review): Observable<Review> { 
    return this.http.post<Review>(this.apiUrl, r);
}

  getData(b : string){
    var temp : Array<Review> = [];
    for(let r of this.data){
      if(b == r.business){
        temp.push(r);
      }
    }
    localStorage.setItem('reviews', JSON.stringify(temp));
    return temp;
  }

}
