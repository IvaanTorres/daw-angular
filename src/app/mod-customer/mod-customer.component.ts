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
    private route: ActivatedRoute
  ) {}

  //! PREGUNTAR COMO PONER OBJETO VACIO (ref<Customer>())
  id = this.route.snapshot.params['id'];
  customer = this.customersService.getCustomer(+this.id);

  ngOnInit(): void {}
}
