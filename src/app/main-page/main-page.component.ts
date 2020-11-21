import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

export interface InventoryData {
  position: number;
  companyName: string;
  partNumber: number;
  quantityOrder: number;
  quantityMade: number;
  madeDate: string;
  quantityScrap: number;
  quantityShipped: number;
  shippedDate: string;
  stock: number;
  location: string;
}

const ELEMENT_DATA: InventoryData[] = [
  {position: 1, companyName: 'Vishesh', partNumber: 1, quantityOrder: 232, quantityMade: 23, madeDate: '11/11/20', quantityScrap: 34, quantityShipped: 3, shippedDate: '11/11/20' , stock: 134, location: "Toronto"},
  {position: 2, companyName: 'Sarjan', partNumber: 123, quantityOrder: 332, quantityMade: 3, madeDate: '11/11/20', quantityScrap: 24, quantityShipped: 13, shippedDate: '11/11/20' , stock: 234, location: "Mumbai"},
  {position: 3, companyName: 'Shivang', partNumber: 41, quantityOrder: 352, quantityMade: 33, madeDate: '11/11/20', quantityScrap: 23, quantityShipped: 233, shippedDate: '11/11/20' , stock: 334, location: "Anand"},
  {position: 4, companyName: 'Krunal', partNumber: 15, quantityOrder: 362, quantityMade: 13, madeDate: '11/11/20', quantityScrap: 214, quantityShipped: 234, shippedDate: '11/11/20' , stock: 434, location: "Goa"},
  {position: 5, companyName: 'Hrishi', partNumber: 61, quantityOrder: 732, quantityMade: 230, madeDate: '11/11/20', quantityScrap: 334, quantityShipped: 253, shippedDate: '11/11/20' , stock: 534, location: "Delhi"},
  {position: 6, companyName: 'Parth', partNumber: 17, quantityOrder: 382, quantityMade: 235, madeDate: '11/11/20', quantityScrap: 236, quantityShipped: 236, shippedDate: '11/11/20' , stock: 634, location: "Nadiad"},
  {position: 7, companyName: 'Ronak', partNumber: 81, quantityOrder: 232, quantityMade: 234, madeDate: '11/11/20', quantityScrap: 234, quantityShipped: 223, shippedDate: '11/11/20' , stock: 734, location: "Vadodara"},
  {position: 8, companyName: 'Krushang', partNumber: 10, quantityOrder: 632, quantityMade: 123, madeDate: '11/11/20', quantityScrap: 134, quantityShipped: 423, shippedDate: '11/11/20' , stock: 834, location: "Ahmedabad"},
  {position: 9, companyName: 'Vivek', partNumber: 12, quantityOrder: 352, quantityMade: 223, madeDate: '11/11/20', quantityScrap: 34, quantityShipped: 232, shippedDate: '11/11/20' , stock: 934, location: "Rajkoy"},
  {position: 10, companyName: 'Rahul', partNumber: 41, quantityOrder: 732, quantityMade: 253, madeDate: '11/11/20', quantityScrap: 343, quantityShipped: 235, shippedDate: '11/11/20' , stock: 234, location: "Dalhousie"},
  // {position: 11, companyName: 'Priyank', partNumber: 61, quantityOrder: 132, quantityMade: 823, madeDate: '11/11/20', quantityScrap: 34, quantityShipped: 233, shippedDate: '11/11/20' , stock: 534, location: "Montreal"},
  // {position: 12, companyName: 'Rut', partNumber: 81, quantityOrder: 320, quantityMade: 123, madeDate: '11/11/20', quantityScrap: 284, quantityShipped: 273, shippedDate: '11/11/20' , stock: 134, location: "Ottawa"},

];

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  dataSource = new MatTableDataSource(ELEMENT_DATA);


  @ViewChild(MatSort, {static: true}) sort: MatSort;

  title = 'frontend';
  displayedColumns: string[] = [
    'position',
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
  // dataSource: any;
  getRowData;
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

  constructor(private http: HttpClient,  private router:Router) { 
    
  }

  master ='Master';

  ngOnInit() {
    this.getAllOrders();
  }
  

  async getAllOrders() {
    // this.getOrders = (await this.http.get('http://localhost:3000/api/getOrders').toPromise()) as any[];
    // this.getRowData = this.getOrders;
    // this.dataSource = new MatTableDataSource(this.getRowData);
    // this.dataSource = ELEMENT_DATA;
    this.dataSource.sort = this.sort;
    console.log(this.dataSource); 
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // deleteRecord(record) {
  //   console.log('Inside Delete', record);
  //   this.orders = record;
  //   this.http.post('http://localhost:3000/api/deleteOrder', {orders: this.orders}).toPromise();
  //   this.dataSource = this.dataSource._data._value.filter(item => item._id != this.orders['_id']);
  // }

  updateRecord(record){
    console.log(record);
    this.router.navigate(['/edit-order'], {state: {record}});
  }

}
