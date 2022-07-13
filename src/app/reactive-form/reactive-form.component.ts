import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  userForm!: FormGroup;
  Fmes = false
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      address: this.fb.group({
      lineOne: new FormControl('',[Validators.required]),
      lineTwo: new FormControl('',[Validators.required]),
      lineThree: new FormControl('',[Validators.required]),
      lineFour: new FormControl('',[Validators.required]),
    }),
    })
    console.log(this.userForm)
  }
submit(){
  console.log(this.userForm)
  console.log(this.userForm.controls['firstName'].status)
}
}
