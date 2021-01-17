import {ListAllHousesComponent} from './modules/page-content/houses/list/list-all-houses/list-all-houses.component';
import {ListOwnHousesComponent} from './modules/page-content/houses/list/list-own-houses/list-own-houses.component';
import {AboutContentComponent} from './_shared/about-content/about-content.component';
import {UserShowComponent} from './modules/page-content/user/detail/user-show/user-show.component';
// import {UserUpdateComponent} from './modules/page-content/user/update/user-update/user-update.component';
import {HouseDetailViewComponent} from './modules/page-content/houses/detail/house-detail-view/house-detail-view.component';
import {UserChangePasswordComponent} from './modules/page-content/user/update/user-change-password/user-change-password.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeContentComponent} from './modules/home-content/home-content.component';
import {LoginComponent} from './modules/authentication/login/login.component';
import {AuthGuard} from './helper/auth-guard';
import {UserUpdateComponent} from './modules/page-content/user/update/user-update/user-update.component';
import {ListRentedHousesComponent} from './modules/page-content/booking/list/list-rented-houses/list-rented-houses.component';
import {CreateHouseComponent} from './modules/page-content/houses/create/create-house/create-house.component';
<<<<<<< HEAD
import {HistoryBookingComponent} from './modules/history-booking/history-booking.component';
=======
import {HouseDetailPostedComponent} from './modules/page-content/houses/detail/house-detail-posted/house-detail-posted.component';
import {PostedHouseEditComponent} from './modules/page-content/houses/edit/posted-house-edit/posted-house-edit.component';
>>>>>>> 2a4b2843239baeb6f224f05b2ab0ade927b33d89

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeContentComponent,
    // canActivate: [AuthGuard]
  }, {
    path: 'houses',
    component: ListAllHousesComponent
  },
  // {
  //   path: 'my-houses',
  //   component: ListOwnHousesComponent
  // },
  {
    path: 'about',
    component: AboutContentComponent
  },
  {
    path: 'user-show/:id',
    component: UserShowComponent
  },
  {
    path: 'user-update/:username',
    component: UserUpdateComponent
  },
  {
    path: 'house-view/:id',
    component: HouseDetailViewComponent
  },
  {
    path: 'change-password/:id',
    component: UserChangePasswordComponent
  },
  {
    path: 'list-rented-houses',
    component: ListRentedHousesComponent
  },
  {
    path: 'houses-create',
    component: CreateHouseComponent
  },
  {
<<<<<<< HEAD
    path: 'history-booking/:id',
    component: HistoryBookingComponent
=======
    path: 'user-ownHouse/:id',
    component: HouseDetailPostedComponent
  },
  {
    path: 'houses-update/:id',
    component: PostedHouseEditComponent
>>>>>>> 2a4b2843239baeb6f224f05b2ab0ade927b33d89
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
