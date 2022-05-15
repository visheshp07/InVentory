import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  // dataSource = new MatTableDataSource(ELEMENT_DATA);


  @ViewChild(MatSort, {static: true}) sort: MatSort;

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
  recordsLength;

  constructor(private http: HttpClient,  private router:Router) { 
    
  }

  master ='Master';

  ngOnInit() {
    this.getAllOrders();
  }
  

  async getAllOrders() {
    this.getOrders = (await this.http.get('http://localhost:3000/api/getOrders').toPromise()) as any[];
    this.getRowData = this.getOrders;
    this.dataSource = new MatTableDataSource(this.getRowData);
    this.dataSource.sort = this.sort;
    this.recordsLength = this.getRowData.length;
    console.log(this.recordsLength);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteRecord(record) {
    console.log('Inside Delete', record);
    this.orders = record;
    this.http.post('http://localhost:3000/api/deleteOrder', {orders: this.orders}).toPromise();
    this.dataSource = this.dataSource._data._value.filter(item => item._id != this.orders['_id']);
  }

  updateRecord(record){
    console.log(record);
    this.router.navigate(['/edit-order'], {state: {record}});
  }

}
