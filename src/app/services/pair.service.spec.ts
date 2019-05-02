import { Pair } from '../models/pair';
import { PAIRS } from '../models/mock-pairs';
import { PairService } from './pair.service';

describe('PairService', () => {
  let actual: Pair[];

  beforeEach(() => {
    const underTest = new PairService();

    actual = underTest.getPairs();
  });

  test('returns correct value', () => {
    expect(actual).toEqual(PAIRS);
  });
});
