import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomerAddComponent } from './customers/customer-add/customer-add.component';
import { CustomerUpdateComponent } from './customers/customer-update/customer-update.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {AuthenticationService} from "./shared/services/authentication.service";
import {AuthGuard} from "./guards/auth.guard";
import {TodoItemService} from "./shared/services/todo-item.service";
import {CustomerDetailsComponent} from "./customers/customer-details/customer-details.component";

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    NavbarComponent,
    WelcomeComponent,
    CustomerDetailsComponent,
    CustomerAddComponent,
    CustomerUpdateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    TodoItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
