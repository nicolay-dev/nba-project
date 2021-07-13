import { MapType } from '@angular/compiler';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Match } from 'src/modules/app-common/interfaces/match.interface';
import { PlayerI } from 'src/modules/app-common/interfaces/player.interface';
import { DataService } from 'src/modules/app-common/services/data.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
})
export class MatchesComponent implements OnInit {
  //Variable to activate or deactivate navbar
  tabName = 'matches';
  // FullData
  playerList: PlayerI[] = [];
  // An Array to charge players that match
  playerMatches: Match[] = new Array();
  // Input from user
  addUpInches = '';

  constructor(private dataW: DataService) {
    //Request the data
    this.dataW.getData().subscribe((res) => {
      this.playerList = res.values;
      this.addUpInches = prompt(
        'Please enter a value to find matching inches',
        '153'
      )!;
      //Calculate matches
      this.addUpInches ? this.calculateMatches() : false;
    });
  }

  ngOnInit(): void {}

  /**
   * It takes the full list of players and identify those matches that their inches add up the value input from user
   * TODO: Identify a faster Algorithm than O(n^2)
   */
  private calculateMatches() {
    this.playerList.forEach((player1) => {
      this.playerList.forEach((player2) => {
        player1 != player2 &&
        Number(player1.h_in) + Number(player2.h_in) === Number(this.addUpInches)
          ? this.playerMatches.push(new Match(player1, player2))
          : false;
      });
      this.playerList.shift();
    });
  }
}
