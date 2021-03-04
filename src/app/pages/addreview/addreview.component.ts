import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ReviewModelService } from '../../services/review-model.service';
import { HttpClient } from '@angular/common/http';
import { BusinessModelService } from '../../services/business-model.service';
import { Business } from '../../types/business';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.scss'],
})
export class AddreviewComponent implements OnInit {
  review;
  param : Params;
  businesses: Array<Business>;
  business : string;
  constructor(private model: ReviewModelService, private busi: BusinessModelService ,private route: ActivatedRoute, private nav: Router, private form: FormBuilder, private http : HttpClient) {
    this.getParams();
    this.businesses = this.busi.getAllData(this.param["cityid"]);
    if(this.param['businessid'] == null){
      this.business = '';
    }
    else{
      this.business = this.param['businessid'];
    }
    this.review = this.form.group({
      id : this.param['newreview'],
      author: '',
      business: this.business,
      text : '',
      rating : 0
      });

   }

  ngOnInit(): void {
  }

  getParams(){
    this.route.params.subscribe( params => {
      this.param = params;
  });
}
  goBack(){
    this.nav.navigate(['/businesses/' + this.param['cityid']]);
  }

  onSubmit(){
    this.model.addReview(this.review.value).subscribe(res =>{
      console.log(res);
      this.nav.navigate(['/businesses/' + this.param['cityid']])
    });
  }
}
