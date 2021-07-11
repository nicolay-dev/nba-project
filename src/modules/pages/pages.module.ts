import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerListComponent } from './player-list/player-list.component';
import { TopNavComponent } from '../navigation/top-nav/top-nav.component';
import { NavigationModule } from '../navigation/navigation.module';
import { MatchesComponent } from './matches/matches.component';



@NgModule({
  declarations: [
    PlayerListComponent,
    MatchesComponent
  ],
  imports: [
    CommonModule,
    NavigationModule
  ]
})
export class PagesModule { }
