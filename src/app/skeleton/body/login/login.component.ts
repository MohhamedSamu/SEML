import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { usuario } from '../../../models/usuario'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorData: any;
  constructor() { }

  loginForm = new FormGroup({
    email: new FormControl('' , Validators.required),
    password: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
  }

  onLogin(form: usuario){
    // this._data.loginByEmail(form);
  }
}
