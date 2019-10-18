import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { loginAnimation } from '../../animation';
import {AuthService} from '../services/auth.service';
import {StorageHelper} from '../../shared/storage.helper';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [loginAnimation]
})
export class LoginComponent implements OnInit {
  
  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authSrv: AuthService,
    private router: Router
  ) {
    this.loginForm = fb.group({
      email: '',
      password: ''
    });
  }

  ngOnInit() {
  
  }
  
  login(): void {
    this.authSrv.loginWithEmail(this.loginForm.value)
      .then(res => {
        this.authSrv.Token = res.user.uid;
        StorageHelper.addToStorage({avatar: res.user.photoURL, name: res.user.displayName}, 'user');
        this.router.navigate(['/blocks']);
      }, err => {
        if(err.code.includes('email')) {
          this.loginForm.get('email').setErrors({'emailError': err.message});
        }
        if(err.code.includes('password')) {
          this.loginForm.get('password').setErrors({'pswError': err.message});
        }
      });
  }
  
  loginWithGH(): void {
    this.authSrv.ghLogin()
      .then(res => {
        this.authSrv.Token = res.credential['accessToken'];
        StorageHelper.addToStorage({avatar: res.user.photoURL, name: res.user.displayName}, 'user');
        this.router.navigate(['/blocks']);
      }, err => {
      
      });
  }

}
