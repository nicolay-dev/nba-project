import { Component, OnInit } from '@angular/core';
import { PlayerI } from 'src/modules/app-common/interfaces/player.interface';
import { DataService } from 'src/modules/app-common/services/data.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
  providers: [DataService],
})
export class PlayerListComponent implements OnInit {
  //Variable to activate or deactivate navbar
  tabName = 'player-list';
  // FullData
  playerList: PlayerI[] = [];
  // List Filtered
  PlayersFiltered: PlayerI[] = [];
  // PLayer Selected
  playerSelected: PlayerI = {};

  constructor(private dataW: DataService) {
    //Getting the raw data
    this.dataW.getData().subscribe((res) => {
      this.playerList = res.values;
    });
  }

  ngOnInit(): void {}

  /**
   * It sorts the player list according with an attribute of preference
   * @param option is the attribute prefered to sort
   * @param playerList: list of players to be sorted
   */
  sortBy(option: string, playerList: PlayerI[]) {
    switch (option) {
      case 'First_Name':
        playerList.sort((player1, player2) => {
          return player1.first_name! > player2.first_name! ? 1 : -1;
        });
        break;
      case 'Last_Name':
        playerList.sort((player1, player2) => {
          return player1.last_name! > player2.last_name! ? 1 : -1;
        });
        break;
      default:
        playerList.sort((player1, player2) => {
          return Number(player1.h_in) - Number(player2.h_in);
        });
        break;
    }
  }

  /**
   * It filters the player list with those players with the same height
   * @param player The player selected from the user interaction
   */
  private filterPlayers(player: PlayerI) {
    this.PlayersFiltered = [];
    this.playerList.filter((res) => {
      res.h_in === player.h_in ? this.PlayersFiltered.push(res) : false;
    });
  }

  /**
   * It's used to switch between views
   * @param player selected by user to obtain more information
   */
  detailClick(player: PlayerI) {
    this.playerSelected = player;
    this.filterPlayers(player);
  }

  /**
   * Used to return to the player list view
   */
  back(): void {
    this.playerSelected = {};
  }
}
