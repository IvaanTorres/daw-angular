import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CustomersComponent } from './customers/customers.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { DelCustomerComponent } from './del-customer/del-customer.component';
import { ModCustomerComponent } from './mod-customer/mod-customer.component';
import { DetailsCustomerComponent } from './details-customer/details-customer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CustomersComponent,
    NewCustomerComponent,
    DelCustomerComponent,
    ModCustomerComponent,
    DetailsCustomerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
