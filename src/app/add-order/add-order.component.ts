import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
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

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
  }

  post() {
    console.log(this.orders)
    this.http.post('http://localhost:3000/api/order', {orders: this.orders}).toPromise()
    .then((result) => {
      this.router.navigateByUrl("/main-page");
      console.log(result);
    });
  }

}
