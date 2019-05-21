import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { Team } from '../models/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  $team: Team;
  teamMemberDisplayText: string;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getTeam(9)
      .subscribe((data) => {
        this.$team = data;
        this.teamMemberDisplayText = data.teammates.sort().join(", ");
      });
  }
}
