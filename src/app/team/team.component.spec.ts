import { TeamComponent } from './team.component';
import { PairService } from '../services/pair.service';
import { Pair } from '../models/pair';

jest.mock('../services/pair.service');

describe('TeamComponent', () => {
  describe('ngOnInit', () => {
    let expectedPairs: Pair[];
    let mockPairService: PairService;
    let underTest: TeamComponent;

    beforeEach(() => {
      mockPairService = new PairService();
      expectedPairs = [{ teammateOne: 'one', teammateTwo: 'two', pairName: 'name' }];
      mockPairService.getPairs = jest.fn(() => expectedPairs);

      underTest = new TeamComponent(mockPairService);

      underTest.ngOnInit();
    });

    test('calls pairService.getPairs', () => {
      expect(mockPairService.getPairs).toHaveBeenCalled();
    });

    test('sets $pairs to value returned from getPairs', () => {
      expect(underTest.$pairs).toEqual(expectedPairs);
    });
  });
});
