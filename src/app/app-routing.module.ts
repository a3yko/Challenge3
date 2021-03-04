import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddreviewComponent } from './pages/addreview/addreview.component';
import { BusinessComponent } from './pages/business/business.component';
import { CitiesComponent } from './pages/cities/cities.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';

const routes: Routes = [
  {
    path: 'cities',
    component: CitiesComponent,
  },
  {
    // redirect to 'home'
    path: '',
    redirectTo: '/cities',
    pathMatch: 'full',
  },
  {
    path: 'businesses/:cityid',
    component: BusinessComponent
  },
  {
    path: 'businesses/:cityid/:businessid',
    component: ReviewsComponent
  },{
    path: 'businesses/:cityid/:businessid/:newreview',
    component: AddreviewComponent
  },{
    path: 'businesses/:cityid/review/:newreview',
    component: AddreviewComponent
  },
  {
    // wildcard route for a 404 page
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
