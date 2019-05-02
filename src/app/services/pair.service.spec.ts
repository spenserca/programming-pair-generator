import { Pair } from '../models/pair';
import { PAIRS } from '../models/mock-pairs';
import { PairService } from './pair.service';
import { Observable } from 'rxjs';

describe('PairService', () => {
  let actual: Pair[];

  beforeEach(() => {
    const underTest = new PairService();

    underTest.getPairs()
      .subscribe((data) => {
        actual = data;
      });
  });

  test('returns correct value', () => {
    expect(actual).toEqual(PAIRS);
  });
});
