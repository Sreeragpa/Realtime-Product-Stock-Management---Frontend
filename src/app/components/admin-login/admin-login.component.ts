import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUserLogin } from '../../models/userModel';
import { AdminServiceService } from '../../shared/services/admin-service.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  loginForm!: FormGroup;
  loginError!: String
  constructor(private fb: FormBuilder, private adminService: AdminServiceService){
    this.loginForm = this.fb.group({
      email:new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",[Validators.required]),
    })
  }

  onSubmit(){
    console.log(this.loginForm.hasError("required"));
    if(this.loginForm.valid){
      this.adminService.adminlogin(this.loginForm.value).subscribe({
        next:(res)=>{
          localStorage.setItem('token',res.data)
        },
        error:(err)=>{
          this.loginError = err.error as string
        }
      })
    }else{
      this.loginForm.markAllAsTouched()
    }
  }



}
