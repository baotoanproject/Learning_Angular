import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InterceptorsService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let httpHeaders = new HttpHeaders().append('Accept', 'application/json');

    const token = `Bearer ${localStorage.getItem(environment.authTokenKey)}`;
    if (token) {
      httpHeaders = httpHeaders.append('Authorization', token);
    } else {
      //navigate to login
    }
    const request = req.clone({ headers: httpHeaders });

    if (request.method != 'GET') {
    }

    return next.handle(request).pipe(
      tap(
        (event) => {},
        (error) => {}
      ),
      finalize(() => {
        if (request.method != 'GET') {
        }
      })
    );
  }
}
