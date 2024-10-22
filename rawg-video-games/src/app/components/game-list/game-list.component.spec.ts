// src/app/components/game-list/game-list.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameListComponent } from './game-list.component';
import { RawgApiService } from '../../services/rawg-api.service';
import { of } from 'rxjs';

describe('GameListComponent', () => {
  let component: GameListComponent;
  let fixture: ComponentFixture<GameListComponent>;
  let service: jasmine.SpyObj<RawgApiService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('RawgApiService', ['getAllGames']);
    TestBed.configureTestingModule({
      declarations: [GameListComponent],
      providers: [{ provide: RawgApiService, useValue: spy }],
    }).compileComponents();

    fixture = TestBed.createComponent(GameListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(RawgApiService) as jasmine.SpyObj<RawgApiService>;
  });

  it('should list games on initialization', () => {
    const dummyGames = [{ name: 'Game 1', id: 1 }, { name: 'Game 2', id: 2 }];
    service.getAllGames.and.returnValue(of(dummyGames));

    fixture.detectChanges();  // Trigger initial data binding

    expect(component.games.length).toBe(2);
    expect(component.games).toEqual(dummyGames);
  });
});
