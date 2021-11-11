import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Cliente {
  _id: number;
  nombreCliente: string;
  emailCliente: string;
  telefono: number;
  email: string;
  contraseña: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserCrudService {

  endpoint = 'https://serviexpress.pythonanywhere.com/api/cliente/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token beeb2c58df0f77b3ddd68e7ef1133a18995966d3' })
  };


  constructor(private httpClient: HttpClient) { }

    createCliente(cliente: Cliente): Observable<any> {
      return this.httpClient.post<Cliente>(this.endpoint, JSON.stringify(cliente), this.httpOptions)
        .pipe(
          catchError(this.handleError<Cliente>('Error occured'))
        );
    }

    getCliente(mail: string): Observable<Cliente> {
      return this.httpClient.get<Cliente>(this.endpoint + '/' + mail, this.httpOptions)
        .pipe(
          tap(_ => console.log(`Cliente fetched: ${mail}`)),
          catchError(this.handleError<Cliente>(`Get Cliente id=${mail}`))
        );
    }

    updateCliente(id, cliente: Cliente): Observable<any> {
      return this.httpClient.patch(this.endpoint + '/' + id, JSON.stringify(cliente), this.httpOptions)
        .pipe(
          tap(_ => console.log(`Cliente updated: ${id}`)),
          catchError(this.handleError<Cliente[]>('Update Cliente'))
        );
    }

    deleteCliente(id): Observable<Cliente[]> {
      return this.httpClient.delete<Cliente[]>(this.endpoint + '/' + id, this.httpOptions)
        .pipe(
          tap(_ => console.log(`Cliente deleted: ${id}`)),
          catchError(this.handleError<Cliente[]>('Delete Cliente'))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        console.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }

  }
