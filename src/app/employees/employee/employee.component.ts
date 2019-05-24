import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  service: any;

  constructor() { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData={
      id:null,
      fullName:'',
      position:'',
      empId:'',
      mobile:''
    }
  }

}
