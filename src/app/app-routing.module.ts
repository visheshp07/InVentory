import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AddOrderComponent } from './add-order/add-order.component';


const routes: Routes = [
  { path: 'main-page', component: MainPageComponent },
  { path: 'add-order', component: AddOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
