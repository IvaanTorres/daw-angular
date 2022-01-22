import { Component, Input, OnInit } from '@angular/core';
import Customer from '../interfaces/Customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css'],
})
export class CustomerCardComponent implements OnInit {
  @Input() data!: Customer;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {}

  addLike() {
    //this.data.likes++;
    //this.customerService.addLike(this.data.id);
  }

  removeLike() {}
}
