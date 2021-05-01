import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms'
import { ServerService } from '../server.service';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  providers: [ServerService]
})
export class FormsComponent implements OnInit {
  signUpForm: FormGroup;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  users: Array<any> = [];



  constructor(
    private formbuilder: FormBuilder,
    private server: ServerService
  ) {
    this.signUpForm = this.formbuilder.group({
      userId: new FormControl(),
      userName: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {
    this.getAllUserDetais();
  }

  getAllUserDetais() {
    this.server.getAllUsers().then((res: any) => {
      console.log(res)
      this.users = res;
    }, (err: any) => {

    })
  }
  PostData() {
    let reqData = {
      UserID: this.signUpForm.controls.userId.value,
      UserName: this.signUpForm.controls.userName.value,
      Password: this.signUpForm.controls.password.value
    }
    this.server.createEvent(reqData).then((res: any) => {
      this.users.push(reqData);
      this.signUpForm.reset();
      console.log(res)
    }, (err: any) => {

    })
    // this.firstName = this.signUpForm.controls.firstName.value;
    // this.lastName = this.signUpForm.controls.lastName.value;
    // this.email = this.signUpForm.controls.email.value;
    // this.password = this.signUpForm.controls.password.value;
    // console.log(this.firstName);
    // console.log(this.lastName);
    // console.log(this.email);
    // console.log(this.password);
    // console.log(signUpForm.controls);
  }
}
