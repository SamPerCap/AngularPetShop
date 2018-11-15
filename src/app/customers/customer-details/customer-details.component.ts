import { Component, OnInit } from '@angular/core';
import {Customer} from "../../shared/models/customer";
import {CustomerService} from "../../shared/services/customer.service";
import {ActivateRoutes} from "@angular/router/src/operators/activate_routes";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
customer: Customer;

  constructor(private route: ActivatedRoute,
    private customerService: CustomerService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomersByID(id).subscribe(customerFromRest => this.customer = customerFromRest);
  }

}
