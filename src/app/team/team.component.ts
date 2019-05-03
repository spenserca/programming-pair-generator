import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { Pair } from '../models/pair';
import { Team } from '../models/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  $team: Team;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getTeam()
      .subscribe((data) => {
        this.$team = data;
      });
  }
}
