import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {CustomersListComponent} from "./customers/customers-list/customers-list.component";
import {CommonModule} from "@angular/common";
import {CustomerDetailsComponent} from "./customers/customer-details/customer-details.component";
import {CustomerAddComponent} from "./customers/customer-add/customer-add.component";
import {CustomerUpdateComponent} from "./customers/customer-update/customer-update.component";
import { AuthGuard } from './guards/auth.guard';
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: 'token', component: LoginComponent },
  {path: '', component: WelcomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'customers', component: CustomersListComponent},
  {path: 'customers/:id', component: CustomerDetailsComponent},
  {path: 'customers-update/:id', component: CustomerUpdateComponent},
  {path: 'customers-add', component: CustomerAddComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
