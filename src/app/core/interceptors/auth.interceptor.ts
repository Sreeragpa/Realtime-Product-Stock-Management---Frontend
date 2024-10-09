import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem("adminToken") || "token";
  console.log(token,"tokennnnn");
  

  // Setting Token in Header
  let clonedReq = req.clone({
    headers: req.headers.set("Auth",token)
  });

  return next(clonedReq);
};
