import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-add-column',
  templateUrl: './add-column.component.html',
  styleUrls: ['./add-column.component.css'],
  encapsulation: ViewEncapsulation.None //Add this line
})

export class AddColumnComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  columns = {
    columnName:'',
    showColumn:''
  };
  displayedColumns: string[] = [
    'columnName',
    'showColumn',
    'delete'
  ];
  getColumns: any;
  getColumnData;
  dataSource: any;

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
    this.getAllColumns();
  }
  
  addColumn() {
    this.http.post('http://localhost:3000/api/addColumn', {columns: this.columns}).toPromise()
    .then((result) => {
      
    });
    this.columns = {
      columnName:'',
      showColumn:''
    };
    this.getAllColumns();
  }

  async getAllColumns() {
    this.getColumns = (await this.http.get('http://localhost:3000/api/getColumns').toPromise()) as any[];
    this.getColumnData = this.getColumns;
    this.dataSource = new MatTableDataSource(this.getColumnData);
    this.dataSource.sort = this.sort;
  }
}
