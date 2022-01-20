import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import Customer from '../interfaces/Customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-mod-customer',
  templateUrl: './mod-customer.component.html',
  styleUrls: ['./mod-customer.component.css'],
})
export class ModCustomerComponent implements OnInit {
  constructor(
    private customersService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  customer!: Customer;

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.customer = this.customersService.getCustomer(id);
  }

  modifyCustomer() {
    this.customersService.updateCustomer(this.customer);
    this.router.navigate(['/customers']);
  }
}
