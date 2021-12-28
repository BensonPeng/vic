import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { PagesRoutingModule } from './../pages/pages-routing.module';
// import { PagesRouter } from '../pages/pages.routing';

const routes: Routes = [
  { path: 'home', component: HomeComponent, loadChildren: () => PagesRoutingModule }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
