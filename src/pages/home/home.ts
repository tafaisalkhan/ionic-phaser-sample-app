import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Game } from '../../game/game';
import { GameState } from '../../game/gamesState';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  /**
   * Game instance
   * @private
   * @type {Game}
   * @memberof HomePage
   */
  private gameInstance: Game;
  private gameInstance1: GameState;

  /**
   * Creates an instance of HomePage.
   * @param {NavController} navCtrl 
   * @memberof HomePage
   */
  constructor( public navCtrl: NavController ) {
    this.gameInstance1 = new GameState();
  }
}
