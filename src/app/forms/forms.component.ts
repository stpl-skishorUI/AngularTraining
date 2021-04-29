import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup, FormBuilder, FormControlName, NgForm } from '@angular/forms'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  signUpForm: FormGroup;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';



  constructor(private formbuilder: FormBuilder) {
    this.signUpForm = this.formbuilder.group({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {
  }
  PostData(signUpForm: any) {
    this.firstName=signUpForm.controls.firstName.value;
    this.lastName=signUpForm.controls.lastName.value;
    this.email=signUpForm.controls.email.value;
    this.password=signUpForm.controls.password.value;
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.email);
    console.log(this.password);
    // console.log(signUpForm.controls);
  }
}
