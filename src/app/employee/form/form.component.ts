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
  emptyId:boolean=false;

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
if(this.branchIdparam===undefined){
  this.branchIdparam=0;
}

if(this.formData.name===undefined){

  this.formData.name="worng";
}

this.employeeService.addEmployee(this.formData,this.branchIdparam).subscribe(

()=>{
  this.router.navigate(['/employees']);
  
 
},
(err)=>{
 


if(err.error==="The National Id Should be 16 Digits"){
this.emptyId=true;
this.error=err.error;
}else{
this.emptyId=false;


}
if(this.formData.nationalId===undefined){
  this.emptyId=true;
  this.error="The National Id Should be 16 Digits";
  }else{
  this.emptyId=false;
  
  
  }
if(err.error==="Only Arabic name Allowed"){
  this.emptyName=true;
  this.errorTwo="Only Arabic name Allowed";
  }else{
  this.emptyName=false;
  
  }
  if(this.formData.name===undefined){
    this.emptyName=true;
    this.errorTwo="Only Arabic name Allowed";
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
