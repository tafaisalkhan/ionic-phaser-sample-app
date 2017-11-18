// import pixi, p2 and phaser ce
import "pixi";
import "p2";
import * as Phaser from "phaser-ce";
import { MyGame } from './my-game';
import { Preloader } from './preloader';
import { Boot } from './boot';
import { Home } from './home';
/**
 * Main entry game class
 * @export
 * @class Game
 * @extends {Phaser.Game}
 */

export class GameState  extends Phaser.Game {
    /**
     * Creates an instance of Game.
     * @memberof Game
     */
   
       constructor() {
        super(360, 640, Phaser.AUTO, 'game', null);
        
        this.state.add('MyGame', MyGame, false);
        this.state.add('Preloader', Preloader, false);
        this.state.add('Boot', Boot, false);
        this.state.add('Home', Home, false);
        this.state.start('Boot');
       
     
    }
    
   
}
