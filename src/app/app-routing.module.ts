import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { AddColumnComponent } from './add-column/add-column.component';


const routes: Routes = [
  { path: 'main-page', component: MainPageComponent },
  { path: 'add-order', component: AddOrderComponent },
  { path: 'edit-order', component: EditOrderComponent },
  { path: 'add-column', component: AddColumnComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
