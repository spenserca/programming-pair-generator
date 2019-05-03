import { TeamComponent } from './team.component';
import { TeamService } from '../services/team.service';
import { Pair } from '../models/pair';
import { of } from 'rxjs';
import { Team } from '../models/team';

jest.mock('../services/team.service');

describe('TeamComponent', () => {
  describe('ngOnInit', () => {
    let expectedTeam: Team;
    let mockPairService: TeamService;
    let underTest: TeamComponent;

    beforeEach(() => {
      mockPairService = new TeamService();
      expectedTeam = {
        pairs: [
          { teammateOne: 'one', teammateTwo: 'two', pairNames: ['first'] },
          { teammateOne: 'one', teammateTwo: 'three', pairNames: ['second'] }
        ],
        teamName: 'test team',
        teammates: ['one', 'two', 'three']
      };
      mockPairService.getTeam = jest.fn(() => of(expectedTeam));

      underTest = new TeamComponent(mockPairService);

      underTest.ngOnInit();
    });

    test('calls pairService.getPairs', () => {
      expect(mockPairService.getTeam).toHaveBeenCalled();
    });

    test('sets $pairs to value returned from getPairs', () => {
      expect(underTest.$team).toEqual(expectedTeam);
    });
  });
});
