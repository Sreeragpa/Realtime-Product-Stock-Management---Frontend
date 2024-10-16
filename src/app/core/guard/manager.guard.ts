import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const managerGuard: CanActivateFn = (route, state) => {
  let token = localStorage.getItem("managerToken");
  const router = inject(Router)
  if(!token){
    router.navigate(['manager/login'])
    return false
  }
  return true;
};
