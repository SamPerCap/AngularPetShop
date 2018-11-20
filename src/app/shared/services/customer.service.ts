import { Injectable } from '@angular/core';
import {Customer} from "../models/customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 apiURL = 'https://samu1667petshop-2018.azurewebsites.net/api/customers';


  constructor(private http: HttpClient){ }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiURL);
  }
  deleteCustomer(id: number): Observable<any>{
    return this.http.delete(this.apiURL + '/' + id);
  }
  getCustomersByID(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.apiURL + '/' + id);
  }

  updateCustomer(customer: Customer): Observable<Customer>{
    debugger;
    return this.http.put<Customer>(this.apiURL + '/' + customer.id, customer);
  }

  addCustomer(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.apiURL, customer);
  }
}
