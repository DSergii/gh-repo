import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AuthModule { }
