import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUser } from '../../../models/userModel';
import { AdminServiceService } from '../../services/admin-service.service';
import { Router } from '@angular/router';

enum formType {
  add = "Register manager",
  edit = "Edit manager"
}

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  @Input({required:true}) formType!:string ;
  @Input() formData!:IUser

  currentForm!: string;
  userForm!: FormGroup;
  loginError!: String;

  constructor(private fb: FormBuilder, private adminService: AdminServiceService, private router: Router){
    if(this.formData){
      
      this.userForm = this.fb.group({
        email:new FormControl(this.formData.email,[Validators.required,Validators.email]),
        password:new FormControl(this.formData.password,[Validators.required]),
        role: new FormControl(this.formData.role,[Validators.required])
      })
    }else{
      this.userForm = this.fb.group({
        email:new FormControl("",[Validators.required,Validators.email]),
        password:new FormControl("",[Validators.required]),
        role: new FormControl("",[Validators.required])
      })
    }
  }

  ngOnInit() {
    if(this.formType=="add"){
      this.currentForm = formType.add 
    }else{
      this.currentForm = formType.edit 
    }
  }

  onSubmit(){
    if(this.userForm.valid){
        if(this.currentForm = formType.add ){
          console.log(this.userForm.value);
          
          this.adminService.addUser(this.userForm.value).subscribe({
            next:(res)=>{
              console.log(res);
            },
            error:(err)=>{
              console.log(err,"ERROR");
            }
          })
        }
    }else{
      this.userForm.markAllAsTouched()
    }
  }

}
