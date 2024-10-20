import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ManagerService } from '../../shared/services/manager.service';
import { Router } from '@angular/router';
import { MessageBundle } from '@angular/compiler';
import { LoginFormComponent } from "../../shared/components/login-form/login-form.component";
import { IUserLogin } from '../../models/userModel';

@Component({
  selector: 'app-manager-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, LoginFormComponent],
  templateUrl: './manager-login.component.html',
  styleUrl: './manager-login.component.css'
})
export class ManagerLoginComponent {
  loginError!: string
  @ViewChild(LoginFormComponent) loginFromComponent!: LoginFormComponent;
  constructor(private fb: FormBuilder, private managerService: ManagerService, private router: Router){

  }

  onSubmit(data: IUserLogin){
      this.managerService.login(data).subscribe({
        next:(res)=>{
          localStorage.setItem('managerToken',res.data);
          this.router.navigate(['manager/dashboard'])
        },
        error:(err)=>{
          this.loginFromComponent.setLoginError(err.error)
        }
      })
  }


}
