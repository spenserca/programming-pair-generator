import { Pair } from '../models/pair';
import { TeamService } from './team.service';
import { Observable } from 'rxjs';
import { Team } from '../models/team';
import { TEAM } from '../models/mock-team';

describe('TeamService', () => {
  let actual: Team;

  beforeEach(() => {
    const underTest = new TeamService();

    underTest.getTeam()
      .subscribe((data) => {
        actual = data;
      });
  });

  test('returns correct value', () => {
    expect(actual).toEqual(TEAM);
  });
});
