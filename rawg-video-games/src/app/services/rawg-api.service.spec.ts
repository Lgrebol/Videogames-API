// src/app/services/rawg-api.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RawgApiService } from './rawg-api.service';

describe('RawgApiService', () => {
  let service: RawgApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RawgApiService],
    });
    service = TestBed.inject(RawgApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve video games from the API', () => {
    const dummyGames = [
      { name: 'Game 1', id: 1 },
      { name: 'Game 2', id: 2 }
    ];

    service.getAllGames().subscribe((games) => {
      expect(games.length).toBe(2);
      expect(games).toEqual(dummyGames);
    });

    const req = httpMock.expectOne(`https://api.rawg.io/api/games?key=845e5f5b06cc4f0d841a951e17ae3fe5`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyGames);
  });
});
