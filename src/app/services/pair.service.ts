import { Injectable } from '@angular/core';
import { Pair } from '../models/pair';
import { PAIRS } from '../models/mock-pairs';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PairService {

  constructor() { }

  getPairs(): Observable<Pair[]> {
    return of(PAIRS);
  }
}
