import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  teamName: string;
  teammates: string[];
  teamMemberDisplayText: string;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getTeam(9)
      .subscribe((data) => {
        this.teamName = data.teamName;
        this.teammates = data.teammates;
        this.teamMemberDisplayText = data.teammates.sort().join(', ');
      });
  }
}