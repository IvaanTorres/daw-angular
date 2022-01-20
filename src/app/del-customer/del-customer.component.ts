import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Customer from '../interfaces/Customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-del-customer',
  templateUrl: './del-customer.component.html',
  styleUrls: ['./del-customer.component.css'],
})
export class DelCustomerComponent implements OnInit {
  constructor(
    private customersService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  customer!: Customer; //! Se tienen que inicializar o hacerlo asi.

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.customer = this.customersService.getCustomer(id);
  }

  deleteCustomer() {
    this.customersService.deleteCustomer(this.customer.id);
    this.router.navigate(['/customers']);
  }
}
