import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthenticationService} from "./authentication.service";
import {environment} from "../../../environments/environment";
import {TodoItem} from "../models/todoitem";
import {Customer} from "../models/customer";

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json',
    'Authorization': 'ny-ath-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoItemService {

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {  }

  getItems(): Observable<Customer[]>{
    // add authorization header with jwt token
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    //get users from application
    return this.http.get<Customer[]>(environment.apiUrl + 'api/customers', httpOptions);
  }

}
