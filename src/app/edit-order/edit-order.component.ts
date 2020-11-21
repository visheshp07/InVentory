import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
  orders = {
    companyName:'',
    partNumber: '',
    quantityOrder: '',
    quantityMade: '',
    madeDate: '',
    quantityScrap: '',
    quantityShipped: '',
    shippedDate: '',
    stock: '',
    location :''
  };

  constructor(private http: HttpClient, private router:Router) { 
    console.log(this.router.getCurrentNavigation().extras.state.record);
    this.orders = this.router.getCurrentNavigation().extras.state.record;
  }

  ngOnInit() {
  }

  async updateRecord(record){
    await this.http.post('http://localhost:3000/api/updateOrder', {orders: this.orders}).toPromise();
    this.router.navigate(['/main-page']);
  }

}
