import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { EmployeeRaw } from './employeeRaw';

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('https://obscure-stream-52298.herokuapp.com/employees');
  }
  saveEmployee(employee: EmployeeRaw) : Observable<any> {
    return this.http.put<any>('https://obscure-stream-52298.herokuapp.com/employee/' + employee._id, employee);
  }
  getEmployee(id) : Observable<EmployeeRaw[]> {
    return this.http.get<EmployeeRaw[]>('https://obscure-stream-52298.herokuapp.com/employee-raw/' + id);
  }
}
