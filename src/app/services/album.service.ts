import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private jsonUrl = '/data/producto_album.json';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }

  getAlbumById(id: number): Observable<any> {
    return this.getAlbums().pipe(
      map(albums => albums.find(a => a.id === id))
    );
  }
}
