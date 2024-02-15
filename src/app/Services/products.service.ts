import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //  Authorization: 'my-auth-token'
    })
  };
  constructor(private httpclient: HttpClient) { }

  getAllProducts(): Observable<Iproduct[]> {
    return this.httpclient.get<Iproduct[]>("http://localhost:3000/products");
  }

  getById(id: number): Observable<Iproduct> {
    return this.httpclient.get<Iproduct>("http://localhost:3000/products/" + { id });
  }

  addProduct(newProduct: Iproduct): Observable<Iproduct> {
    return this.httpclient.post<Iproduct>("http://localhost:3000/products", newProduct, this.httpOptions);//.pipe(retry(2), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }


  public getAllProductsByCategory(categoryID: number) { return this.httpclient.get<Iproduct[]>(`http://localhost:3000/products?categoryID=${categoryID}`) }


  getAllProductsIds(): Observable<number[]> {
    return this.getAllProducts().pipe(
      map((clients: Iproduct[]) => clients.map(client => client.id)));
  }
}



