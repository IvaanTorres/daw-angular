import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Customer from '../interfaces/Customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css'],
})
export class NewCustomerComponent implements OnInit {
  constructor(
    private customersService: CustomerService,
    private router: Router
  ) {}

  customer: Customer = { id: 0, name: '', work: '' };

  ngOnInit(): void {}

  createCustomer() {
    console.log(this.customer);
    this.customersService.createCustomer(this.customer);
    this.router.navigate(['/customers']);
  }
}
