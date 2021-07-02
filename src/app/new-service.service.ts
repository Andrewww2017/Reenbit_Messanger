import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private httpClient: HttpClient,) { }
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  get(url:string): Observable<any> {
     return this.httpClient.get<any>(url)
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }
  httpError(error:HttpErrorResponse) {
    let msg = '';
    if(error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
}




