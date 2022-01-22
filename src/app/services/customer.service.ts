import { Injectable } from '@angular/core';
import Customer from '../interfaces/Customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor() {}

  customers: Customer[] = [
    {
      id: 1,
      name: 'Ana',
      work: 'Programadora',
      img: '1.jpg',
      likes: 0,
    },
    {
      id: 2,
      name: 'Elena',
      work: 'Administrativa',
      img: '2.jpg',
      likes: 0,
    },
    {
      id: 3,
      name: 'Juan',
      work: 'Analista',
      img: '3.jpg',
      likes: 0,
    },
    {
      id: 4,
      name: 'Luis',
      work: 'Programador',
      img: '4.jpg',
      likes: 0,
    },
    {
      id: 5,
      name: 'Maria',
      work: 'Diseñadora',
      img: '5.jpg',
      likes: 0,
    },
    {
      id: 6,
      name: 'Pedro',
      work: 'Marketing',
      img: '6.jpg',
      likes: 0,
    },
  ];

  getCustomers() {
    return this.customers;
  }

  getCustomer(id: Number) {
    //! Nunca utilizar find() sino findIndex().
    //! find() = Customer | undefined.
    //! findIndex() = Customer.
    const index = this.customers.findIndex((c) => c.id === id);
    return this.customers[index];
  }

  createCustomer(customer: Customer) {
    this.customers.push(customer);
  }

  updateCustomer(customer: Customer) {
    let pos = this.customers.findIndex((c) => c.id === customer.id);
    this.customers[pos] = customer;
  }

  deleteCustomer(id: Number) {
    let pos = this.customers.findIndex((c) => c.id === id);
    this.customers.splice(pos, 1);
  }

  /* ----------------------------------- -- ----------------------------------- */

  addLike(id: number) {
    const customer = this.getCustomer(id);
    customer.likes++;
  }

  removeLike() {}
}
