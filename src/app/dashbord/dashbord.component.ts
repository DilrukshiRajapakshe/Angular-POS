import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  customerCount: number = 10;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // 1 st
    // this.http.get<any>("http://localhost:8080/api/v1/customers").subscribe(value => {
    //   this.customerCount = value.length;
    // });
    // 2 nd
    this.http.get<any>("http://localhost:8080/api/v1/customers").subscribe(customers => {
      this.customerCount= customers.length;
    }, error1 => {});

  }

}
