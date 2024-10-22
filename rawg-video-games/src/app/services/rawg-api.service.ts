// src/app/services/rawg-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RawgApiService {
  private apiUrl = 'https://api.rawg.io/api/games?key=845e5f5b06cc4f0d841a951e17ae3fe5';

  constructor(private http: HttpClient) {}

  getAllGames(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
