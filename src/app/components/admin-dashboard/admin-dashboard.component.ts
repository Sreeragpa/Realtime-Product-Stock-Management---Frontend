import { Component, ElementRef } from '@angular/core';
import { UserFormComponent } from "../../shared/components/user-form/user-form.component";
import { AdminServiceService } from '../../shared/services/admin-service.service';
import { IUser } from '../../models/userModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [UserFormComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  users: IUser[] = [];
  isEditActive: boolean = false;
  editUserData!: IUser


  constructor(private adminService: AdminServiceService, private router : Router){

  }

  ngOnInit() {
    this.adminService.getUsers().subscribe({
      next:(res)=>{
        this.users = res.data
      }
    })
  }

  editUser(user: IUser){
    console.log(user);
    this.editUserData = user;
    this.isEditActive = true
  }

  logOut() {
    localStorage.removeItem("adminToken");
    this.router.navigate(['admin/login'])
    
  }
}
