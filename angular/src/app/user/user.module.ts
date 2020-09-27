import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user.component';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule
  ],
  declarations: [
    UserComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent
  ]
})
export class UserModule { }
