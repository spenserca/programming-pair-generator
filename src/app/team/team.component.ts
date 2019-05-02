import { Component, OnInit } from '@angular/core';
import { PairService } from '../services/pair.service';
import { Pair } from '../models/pair';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  $pairs: Pair[];

  constructor(private pairService: PairService) { }

  ngOnInit() {
    this.pairService.getPairs()
      .subscribe((data) => {
        this.$pairs = data;
      });
  }

}
