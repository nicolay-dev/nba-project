import { Component, OnInit } from '@angular/core';
import { PlayerI } from 'src/modules/app-common/interfaces/player.interface';
import { DataService } from 'src/modules/app-common/services/data.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
  providers: [DataService]
})
export class PlayerListComponent implements OnInit {
  tabName = 'player-list';
  private playerList: PlayerI[] = [];

  constructor(private dataW: DataService) { }

  ngOnInit(): void {
    this.dataW.getData().subscribe((res)=>{
      this.playerList = res;
      console.log(this.playerList);
    });
  }

}
