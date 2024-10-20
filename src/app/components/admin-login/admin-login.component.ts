import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUserLogin } from '../../models/userModel';
import { AdminServiceService } from '../../shared/services/admin-service.service';
import { Router } from '@angular/router';
import { LoginFormComponent } from "../../shared/components/login-form/login-form.component";

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, LoginFormComponent],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  @ViewChild(LoginFormComponent) loginFormComponent!: LoginFormComponent
  constructor(private adminService: AdminServiceService,private router: Router){
  }

  onSubmit(data: IUserLogin){

      this.adminService.adminlogin(data).subscribe({
        next:(res)=>{
          localStorage.setItem('adminToken',res.data)
          console.log("Token Saved");
          this.router.navigate(['admin/dashboard'])
          
        },
        error:(err)=>{
          this.loginFormComponent.setLoginError(err.error)
        }
      })
  }



}
