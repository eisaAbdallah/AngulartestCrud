import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Branch } from '../branch';
import { EmployeeData } from '../employee-data';
import { Router } from '@angular/router';


import { EmployeeService } from '../Employee.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  employe: any[]=[];
error!:string;
errorTwo!:string;
  employees: EmployeeData[] = [];
  formData!: any ;
  empty:boolean=false;
  
  emptyName:boolean=false;
  branchIdparam!: number;
  constructor(private employeeService: EmployeeService,private router: Router,private fb:FormBuilder) {  }

  ngOnInit(): void { 
this.formData={}
this.getEmployees();


  }
  getEmployees(){

this.employeeService.getEmployees().subscribe(


  data=> {
  this.employees=data;
  
}
)

  }

addEmployees(){
this.branchIdparam=this.formData.branchId; 


this.employeeService.addEmployee(this.formData,this.branchIdparam).subscribe(

()=>{

  this.router.navigate(['/employees']);
 
},
(err)=>{
 



if(err.error==="The National Id Should be 16 Digits"&&err.error!=null){
this.empty=true;
this.error=err.error;
}else{
this.empty=false;


}
if(err.error==="Only Arabic name Allowed"&&err.error!=null){
  this.emptyName=true;
  this.errorTwo=err.error;
  }else{
  this.emptyName=false;
  
  }
  
}
);

}
    
    
deleteEmployee(id:number){

  this.employeeService.deleteEmployee(id);
  
  this.router.navigate(['/employees']);
  
  }


  }
