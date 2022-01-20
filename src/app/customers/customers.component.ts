import { Component, OnInit } from '@angular/core';

//! INTERFACES
import Customer from '../interfaces/Customer';
//! SERVICES
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  constructor(private customersService: CustomerService) {} //Aqui se deben inicializar los servicios y el router. Se deben importar arriba.

  customers: Customer[] = [];

  ngOnInit(): void {
    this.customers = this.customersService.getCustomers();
  }
}
