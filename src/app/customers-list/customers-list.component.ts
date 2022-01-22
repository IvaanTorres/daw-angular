import { Component, OnInit } from '@angular/core';
import Customer from '../interfaces/Customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css'],
})
export class CustomersListComponent implements OnInit {
  constructor(private customerService: CustomerService) {}

  customers: Customer[] = [];

  ngOnInit(): void {
    this.customers = this.customerService.getCustomers();
  }
}
