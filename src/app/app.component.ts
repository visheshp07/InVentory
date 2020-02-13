import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'frontend';
  displayedColumns: string[] = [
    'companyName',
    'partNumber',
    'quantityOrder',
    'quantityMade',
    'madeDate',
    'quantityScrap',
    'quantityShipped',
    'shippedDate',
    'stock',
    'location',
    'update',
    'delete'
  ];
  dataSource: any;
  message = '';
  username = '';
  messages = [];

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
  getOrders: any;

  constructor(private http: HttpClient){}

  async ngOnInit(){
    this.getOrders = (await this.http.get('http://localhost:3000/api/getOrders').toPromise()) as any[];
    this.dataSource = this.getOrders;
    console.log(this.dataSource);  
  }

  // post() {
  //   console.log(this.orders);
  //   for (let i = 0; i < this.dataSource.length; i++) {
  //     console.log(this.dataSource[i]);
  //     if (this.dataSource[i]._id === this.orders['_id']){
  //       this.http.post('http://localhost:3000/api/updateOrder', {orders: this.orders}).toPromise();
  //       break;
  //     } else if (((this.dataSource.length - 1) === i) && (this.dataSource[i]._id !== this.orders['_id'])){
  //       this.http.post('http://localhost:3000/api/order', {orders: this.orders}).toPromise();
  //       break;
  //     } else {
  //       console.log('Vishesh');
  //     }
  //   }
  // }

  post() {
    console.log(this.orders)
    this.http.post('http://localhost:3000/api/order', {orders: this.orders}).toPromise();
  }

  updateRecord(record) {
    console.log('Inside Edit', record);
    this.orders = record;
  }

  deleteRecord(record) {
    console.log('Inside Delete', record);
    this.orders = record;
    this.http.post('http://localhost:3000/api/deleteOrder', {orders: this.orders}).toPromise();
    // this.orders = record;
  }
}
