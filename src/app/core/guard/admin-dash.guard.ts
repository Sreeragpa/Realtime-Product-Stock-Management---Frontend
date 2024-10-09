import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminDashGuard: CanActivateFn = (route, state) => {
  let token = localStorage.getItem("adminToken");
  const router = inject(Router)
  if(token){
    return true;
  }else{
    router.navigate(['admin/login'])
    return false
  }
};
