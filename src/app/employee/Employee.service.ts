import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { EmployeeData } from './employee-data';
import { Branch } from './branch';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  branch :Branch[]=[];
baseUrl='http://localhost:9091/api/getemployees'

  constructor(private http: HttpClient) { }




getEmployees():Observable<any>{


return this.http.get<any>(this.baseUrl);

}
addEmployee(empdata: any,branchId:number): Observable<any> {




  return this.http.post<any>(`http://localhost:9091/api/addemployee?branchId=${branchId}`, empdata);
  }
  deleteEmployee(Id:number){




     this.http.get(`http://localhost:9091/api/deleteemployee?employeeId=${Id}`).subscribe(data=>console.log("success"));
    }
    
}
