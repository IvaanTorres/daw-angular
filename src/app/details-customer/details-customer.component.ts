import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Customer from '../interfaces/Customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-details-customer',
  templateUrl: './details-customer.component.html',
  styleUrls: ['./details-customer.component.css'],
})
export class DetailsCustomerComponent implements OnInit {
  constructor(
    private customersService: CustomerService,
    private route: ActivatedRoute
  ) {}

  id = this.route.snapshot.params['id'];
  customer = this.customersService.getCustomer(+this.id);

  ngOnInit(): void {}
}
