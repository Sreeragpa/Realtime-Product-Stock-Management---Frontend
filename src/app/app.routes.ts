import { Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { ManagerLoginComponent } from './components/manager-login/manager-login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { adminDashGuard } from './core/guard/admin-dash.guard';
import { ManagerDashboardComponent } from './components/manager-dashboard/manager-dashboard.component';
import { managerGuard } from './core/guard/manager.guard';
import { StoremanagerLoginComponent } from './components/storemanager-login/storemanager-login.component';
import { StoremanagerDashboardComponent } from './components/storemanager-dashboard/storemanager-dashboard.component';

export const routes: Routes = [
    {path:"",redirectTo:"/admin/login",pathMatch:'full'},
    {path:"admin",redirectTo:"/admin/dashboard",pathMatch:'full'},
    {path:"admin/login",component:AdminLoginComponent},
    {path:"admin/dashboard",component:AdminDashboardComponent,canActivate:[adminDashGuard]},
    {path:"manager/login",component:ManagerLoginComponent},
    {path:"manager/dashboard",component:ManagerDashboardComponent,canActivate:[managerGuard]},
    {path:"storemanager/login",component:StoremanagerLoginComponent},
    {path:"storemanager/dashboard",component:StoremanagerDashboardComponent},

];
