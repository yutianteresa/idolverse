import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IDleService {
  private jsonUrl = '/data/producto_i-dle.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }

  getProductsById(id: number): Observable<any> {
    return this.getProducts().pipe(
      map(products => products.find(p => p.id === id))
    );
  }
}
