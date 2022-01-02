import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HotelComponent } from './hotel/hotel.component';
import { BusComponent } from './bus/bus.component';
import { IntroComponent } from './intro/intro.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    HotelComponent,
    BusComponent,
    IntroComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
