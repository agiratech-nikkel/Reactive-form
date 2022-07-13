import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray, FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-reactiv-array',
  templateUrl: './reactiv-array.component.html',
  styleUrls: ['./reactiv-array.component.scss']
})
export class ReactivArrayComponent implements OnInit {
  todoForm!:FormGroup
  arr!: FormArray;
  ars!:FormArray
  ans!:any
  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
    this.todoForm = this.fb.group({
      ars: this.fb.array([this.create])
    });
  }
  create(){
   return this.todoForm.controls["todonew"] as FormArray
  }
  Submit(){
    this.ars = this.todoForm.get('ars') as FormArray
    this.ars.push(this.ars);
    // console.log(this.todoForm.value)
  }
}
