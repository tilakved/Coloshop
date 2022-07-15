import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../../core/services/helper/auth/auth.service"
import { FormGroup, FormControl }  from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {

  constructor(public _service: AuthService, private route: Router, private notify: ToastrService) {
  }

  ngOnInit(): void {
  }


  loginForm = new FormGroup({
    uname: new FormControl(''),
    password: new FormControl(''),
  })

  get f() {
    return this.loginForm.controls;
  }

  submitted = false;

  showSuccessToaster() {
    this.notify.success("Logged In Successfully!!")
  }
  showErrorToaster() {
    this.notify.error("Invalid Log In!!")
  }
  check(uname: any, pass: any) {
    this.submitted = true;
    if (this.loginForm.valid) {
      let output = this._service.login(uname, pass);
      if (output) {
        this._service.isAuthenticate = true
        this.route.navigate(['admin/dashboard'])
        this.showSuccessToaster()
      } else {
        this.submitted = false
        this._service.isAuthenticate = false;
        this.loginForm.reset()
        this.showErrorToaster()
      }
    }
  }

  goBack() {
    this.route.navigate([''])
  }
}
