import { RouterModule, Routes } from '@angular/router';
import { BusComponent } from './bus/bus.component';
import { HotelComponent } from './hotel/hotel.component';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'hotel', component: HotelComponent },
  { path: 'bus', component: BusComponent },
  { path: 'intro', component: IntroComponent }
];


export const PagesRouter = routes;
