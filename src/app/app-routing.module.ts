import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { ModCustomerComponent } from './mod-customer/mod-customer.component';
import { DetailsCustomerComponent } from './details-customer/details-customer.component';
import { DelCustomerComponent } from './del-customer/del-customer.component';
import { CustomersListComponent } from './customers-list/customers-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/list', component: CustomersListComponent },
  { path: 'new', component: NewCustomerComponent },
  { path: 'customers/:id', component: DetailsCustomerComponent },
  { path: 'customers/:id/edit', component: ModCustomerComponent },
  { path: 'customers/:id/delete', component: DelCustomerComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
