import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../shared/services/customer.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  customerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl('')
  });

  id : number;

  constructor(private route: ActivatedRoute,
              private customerService: CustomerService,
              private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomersByID(this.id).subscribe(customerFromRest =>
    {this.customerForm.patchValue({
        firstName: customerFromRest.firstName,
        lastName: customerFromRest.lastName,
        address: customerFromRest.address})});

    const customer = this.customerService.getCustomersByID(this.id);

  }

  save() {
    const customer = this.customerForm.value;
    customer.id = this.id;
    this.customerService.updateCustomer(customer).subscribe(customerUpdated =>{
      this.router.navigateByUrl('/customers');});
    this.customerForm.reset();
  }

}
