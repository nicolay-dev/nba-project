import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchesComponent } from 'src/modules/pages/matches/matches.component';
import { PlayerListComponent } from 'src/modules/pages/player-list/player-list.component';

const routes: Routes = [
  {
    path: 'player-list',
    component: PlayerListComponent,
  },
  {
    path: 'matches',
    component: MatchesComponent,
  },
  {
    path: '',
    redirectTo: '/player-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
