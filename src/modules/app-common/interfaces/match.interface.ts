import { PlayerI } from './player.interface';

export interface MatchI {
  player1: PlayerI;
  player2: PlayerI;
}

export class Match implements MatchI {
  player1: PlayerI;
  player2: PlayerI;
  constructor(player1: PlayerI, player2: PlayerI) {
    this.player1 = player1;
    this.player2 = player2;
  }
}
