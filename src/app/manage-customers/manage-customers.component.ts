import { Component, OnInit } from '@angular/core';
import {Customer} from '../dto/customer';
import {HttpClient} from '@angular/common/http';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css']
})
export class ManageCustomersComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadAllCustomer();
  }
  loadAllCustomer(): void {
    this.http.get<Customer[]>('http://localhost:8080/api/v1/customers').subscribe(customers1 => {
      this.customers = customers1;
    });
  }

  deleteCustomer(customer: Customer): void {
    this.http.delete('http://localhost:8080/api/v1/customers/' + customer.id, {observe: 'response'}).subscribe(
      response => {
        if (response.status === 200) {
          this.loadAllCustomer();
        } else {
          alert(' Faild to Customer the Delete ');
        }
      }
    );
  }
  saveCustomer(id: string, name: string, address: string, salary: number): void {
    this.http.post('http://localhost:8080/api/v1/customers',
      new Customer(id, name, address, salary), {observe: 'response'}).subscribe(
      response => {
        if (response.status === 201) {
          this.loadAllCustomer();
          alert('Customer Added Ok !');
        } else {
          alert(' Faild to Customer the Delete ');
        }
      }
     );
  }
}









