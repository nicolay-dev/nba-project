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
  tabName = 'player-list';
  playerList: PlayerI[] = [];
  PlayersFiltered: PlayerI[] = [];
  playerSelected: PlayerI = {};

  constructor(private dataW: DataService) {
    this.dataW.getData().subscribe((res) => {
      this.playerList = res.values;
    });
  }

  ngOnInit(): void {}

  detailClick(player: PlayerI) {
    this.playerSelected = player;
    this.filterPlayers(player);
  }

  sortBy(option: string, playerList:PlayerI[]) {
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

  back():void {
    this.playerSelected = {};
  }
  
  private filterPlayers(player: PlayerI) {
    this.PlayersFiltered = [];
    this.playerList.filter((res) => {
      res.h_in === player.h_in ? this.PlayersFiltered.push(res) : false;
    });
  }

}
