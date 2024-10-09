import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let clonedReq = req.clone();
  console.log(clonedReq);
  return next(req);
};
