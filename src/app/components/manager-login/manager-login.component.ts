import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ManagerService } from '../../shared/services/manager.service';
import { Router } from '@angular/router';
import { MessageBundle } from '@angular/compiler';

@Component({
  selector: 'app-manager-login',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './manager-login.component.html',
  styleUrl: './manager-login.component.css'
})
export class ManagerLoginComponent {
   loginForm!: FormGroup
  loginError!: string
  constructor(private fb: FormBuilder, private managerService: ManagerService, private router: Router){
    this.loginForm = this.fb.group({
      email:new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",[Validators.required]),
    })
  }

  onSubmit(){
    console.log(this.loginForm.hasError("required"));
    if(this.loginForm.valid){
      this.managerService.login(this.loginForm.value).subscribe({
        next:(res)=>{
          localStorage.setItem('managerToken',res.data);
          this.router.navigate(['manager/dashboard'])
        },
        error:(err)=>{
          this.setError(err.error)
        }
      })
    }else{
      this.loginForm.markAllAsTouched()
    }
  }

  setError(message: string){
    this.loginError = message;
    setTimeout(()=>{
      this.loginError = ""
    },4000)
  }
}
