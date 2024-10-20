import { Component, inject, ViewChild } from '@angular/core';
import { LoginFormComponent } from "../../shared/components/login-form/login-form.component";
import { IUserLogin } from '../../models/userModel';
import { StoremanagerService } from '../../shared/services/storemanager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-storemanager-login',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './storemanager-login.component.html',
  styleUrl: './storemanager-login.component.css'
})
export class StoremanagerLoginComponent {

  @ViewChild(LoginFormComponent) loginFormComponent!: LoginFormComponent
  private storemanagerService = inject(StoremanagerService)
  private router = inject(Router)
  
  onSubmit(data:IUserLogin){
    this.storemanagerService.login(data).subscribe({
      next:(res)=>{
        console.log(res);
        localStorage.setItem('storemanagerToken',res.data);
        this.router.navigate(['storemanager/dashboard'])
      },
      error:(err)=>{
        this.loginFormComponent.setLoginError(err.error)
      }
    })
  }
}
