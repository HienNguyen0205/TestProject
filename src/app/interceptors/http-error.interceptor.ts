import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(catchError(err => {
    if([404].includes(err.status)){
      console.error('Page not found')
    }
    console.error(err.message)
    return throwError(() => err)
  }))
};
