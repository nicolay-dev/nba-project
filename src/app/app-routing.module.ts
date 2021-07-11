import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerListComponent } from 'src/modules/pages/player-list/player-list.component';

const routes: Routes = [
  {
    path: '',
    // TODO: Aqui va el component hijo que se carga con el path
    component: PlayerListComponent,
    // loadChildren: () =>
    //     import('../modules/pages/pages.module').then((m) => m.PagesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
