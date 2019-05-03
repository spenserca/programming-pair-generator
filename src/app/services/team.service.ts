import { Injectable } from '@angular/core';
import { Pair } from '../models/pair';
import { Observable, of } from 'rxjs';
import { Team } from '../models/team';
import { TEAM } from '../models/mock-team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  getTeam(): Observable<Team> {
    return of(TEAM);
  }
}
