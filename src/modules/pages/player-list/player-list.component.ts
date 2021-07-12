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
  playerList: PlayerI[] = [];

  constructor(private dataW: DataService) {
    this.dataW.getData().subscribe((res)=>{
      this.playerList = res.values;
      // console.log(this.playerList);
    });
   }

  ngOnInit(): void {
    
  }

  detailClick(player: PlayerI){
    console.log(player);    
  }

  sortBy(option: string){
    console.log(option);
    
  }

}
