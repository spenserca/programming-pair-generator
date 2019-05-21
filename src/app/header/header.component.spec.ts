import { Chance } from 'chance';

import { HeaderComponent } from './header.component';
import { Team } from '../models/team';
import { TeamService } from '../services/team.service';
import { of } from 'rxjs';

const chance = new Chance();

describe('HeaderComponent', () => {
  let expectedTeam: Team;
  let mockTeamService: TeamService;
  let underTest: HeaderComponent;

  beforeEach(() => {
    mockTeamService = new TeamService();
    expectedTeam = {
      teamName: chance.string(),
      teammates: [chance.string(), chance.string()]
    };
    mockTeamService.getTeam = jest.fn(() => of(expectedTeam));
    underTest = new HeaderComponent(mockTeamService);

    underTest.ngOnInit();
  });

  test('calls TeamService.getTeam with the correct parameters', () => {
    expect(mockTeamService.getTeam).toHaveBeenCalledWith(9);
  });

  test('sets teamName to the correct value', () => {
    expect(underTest.teamName).toEqual(expectedTeam.teamName);
  });

  test('sets teammates to the correct value', () => {
    expect(underTest.teammates).toEqual(expectedTeam.teammates);
  });

  test('sets teamMemberDisplayText to the correct value', () => {
    const expected = expectedTeam.teammates.sort().join(', ');

    expect(underTest.teamMemberDisplayText).toEqual(expected);
  });
});
