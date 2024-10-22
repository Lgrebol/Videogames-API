import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiKey = '845e5f5b06cc4f0d841a951e17ae3fe5';
  private apiUrl = 'https://api.rawg.io/api/games';

  constructor(private http: HttpClient) { }

  getGames(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?key=${this.apiKey}`);
  }
}
