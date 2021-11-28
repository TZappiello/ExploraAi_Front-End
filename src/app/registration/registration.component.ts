import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userName = "Vinicius Eduardo"
  formRegistration = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    date: new FormControl(''),
    password: new FormControl('', Validators.compose([Validators.required,
       Validators.minLength(4), Validators.maxLength(8)]))
  })

  constructor() { }

  ngOnInit(): void {
  
  }

  checkDate(){
    let currentDate = new Date()
    console.log(currentDate)
  }

  register(){
    console.log(this.formRegistration.get('password')?.invalid)
    console.log(this.formRegistration, "My Form")
  }

}
