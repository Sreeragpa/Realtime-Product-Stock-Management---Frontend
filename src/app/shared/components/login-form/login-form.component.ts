import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUserLogin } from '../../../models/userModel';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  @Output() loginEvent: EventEmitter<IUserLogin> = new EventEmitter();
  @Input() loginError: string = "";

  loginForm!: FormGroup 


  constructor(private fb: FormBuilder){
    this.loginForm = this.fb.group({
      email: new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl("",[Validators.required])
    })
  }

  setLoginError(message: string){
    this.loginError = message;
    setTimeout(()=>{
      this.loginError = ""
    },4000)
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.loginEvent.emit(this.loginForm.value)
    }else{
      this.loginForm.markAllAsTouched()
    }
  }

  
}
