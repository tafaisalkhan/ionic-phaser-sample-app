import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GameState } from '../../game/gamesState';
import { GameserviceProvider } from '../../providers/gameservice/gameservice';
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

  private gameInstance1: GameState;
  data;
  /**
   * Creates an instance of HomePage.
   * @param {NavController} navCtrl 
   * @memberof HomePage
   */
 
  constructor( public navCtrl: NavController , public gameService: GameserviceProvider) {
    console.log(this.gameService.getQuestionListafd());
    this.gameService.getQuestionListafd()
    .subscribe(data => {
       console.log(data);
       this.data = data
       this.gameInstance1 = new GameState(this.data);
      },
    (err) => {console.log(err);
  
  
      }
      );
   
  }
  startGame(){
    this.gameInstance1 = new GameState(this.data);
  }
}
