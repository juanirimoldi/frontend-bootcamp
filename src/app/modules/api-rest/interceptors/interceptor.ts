import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class Interceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = localStorage.getItem('token');
        if(token){
            const requestClone = req.clone({
                headers: req.headers.set('auth',localStorage.getItem('token'))
            });
            return next.handle(requestClone);
        }
        else{
            const requestClone = req.clone({
            });
            return next.handle(requestClone);
        }
    }
}
