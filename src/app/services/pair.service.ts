import { Injectable } from '@angular/core';
import { Pair } from '../models/pair';
import { PAIRS } from '../models/mock-pairs';

@Injectable({
  providedIn: 'root'
})
export class PairService {

  constructor() { }

  getPairs(): Pair[] {
    return PAIRS;
  }
}
