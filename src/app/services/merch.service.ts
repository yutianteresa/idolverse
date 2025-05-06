import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MerchService {

  private jsonUrl = '/data/producto_album.json';

  constructor(private http: HttpClient) {}

  getMerchs(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }

  getMerchById(id: number): Observable<any> {
    return this.getMerchs().pipe(
      map(merch => merch.find(m => m.id === id))
    );
  }
}
