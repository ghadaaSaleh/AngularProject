import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icategory } from '../Models/icategory';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpclient: HttpClient) { }

  getAllProducts(): Observable<Icategory[]> {
    return this.httpclient.get<Icategory[]>("http://localhost:3000/Categories");
  }
}
