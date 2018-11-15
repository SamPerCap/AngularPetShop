import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {CustomersListComponent} from "./customers/customers-list/customers-list.component";
import {CommonModule} from "@angular/common";
import {CustomerDetailsComponent} from "./customers/customer-details/customer-details.component";
import {CustomerAddComponent} from "./customers/customer-add/customer-add.component";
import {CustomerUpdateComponent} from "./customers/customer-update/customer-update.component";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'customers', component: CustomersListComponent},
  {path: 'customers/:id', component: CustomerDetailsComponent},
  {path: 'customers-update/:id', component: CustomerUpdateComponent},
  {path: 'customers-add', component: CustomerAddComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
