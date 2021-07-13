import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { PlayerI } from 'src/modules/app-common/interfaces/player.interface';

import { PlayerListComponent } from './player-list.component';

describe('PlayerListComponent', () => {
  let component: PlayerListComponent;
  let fixture: ComponentFixture<PlayerListComponent>;
  const fakeActivatedRoute = {
    snapshot: { data: {} },
  } as ActivatedRoute;
  let playerMock: PlayerI = {
    first_name: 'Nicolay',
    h_in: '68.5',
    h_meters: '1.74',
    last_name: 'Joya',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerListComponent],
      providers: [
        HttpClient,
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        HttpHandler,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be not player selected', () => {
    component.back();
    expect(component.playerSelected).toEqual({});
  });

  it('should be not player selected', () => {
    component.detailClick(playerMock);
    let spy = spyOn<any>(component, 'filterPlayers').and.callThrough();
    expect(component.playerSelected).toBe(playerMock);
    // expect(spy).toHaveBeenCalledTimes(1);
  });
});
