import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from '../page404/page404.component';
import { BusComponent } from './bus/bus.component';
import { HotelComponent } from './hotel/hotel.component';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'hotel', component: HotelComponent },
  { path: 'bus', component: BusComponent },
  { path: 'intro', component: IntroComponent },
  { path: '**', component: Page404Component }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
