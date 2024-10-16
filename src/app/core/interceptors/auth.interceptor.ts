import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const adminToken = localStorage.getItem("adminToken");
  const managerToken = localStorage.getItem("managerToken");
  const storemanagerToken = localStorage.getItem("storemanagerToken");
  let token = "token";  

  if (adminToken) {
    token = adminToken;  // Use admin token if logged in as admin
  } else if (managerToken) {
    token = managerToken;  // Use manager token if logged in as manager
  }else if (storemanagerToken){
    token = storemanagerToken
  }
  

  // Setting Token in Header
  let clonedReq = req.clone({
    headers: req.headers.set("auth",token)
  });

  return next(clonedReq);
};
