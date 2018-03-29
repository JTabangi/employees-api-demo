import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('https://obscure-stream-52298.herokuapp.com/employees');
  }
}
