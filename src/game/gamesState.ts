// import pixi, p2 and phaser ce
import "pixi";
import "p2";
import * as Phaser from "phaser-ce";
import { Boot } from './Boot';
import { Preloader } from './Preloader';
import {MainMenu} from './MainMenu';
import {Level01} from './Level01';
//import { Preloader } from './Preloader';

/**
 * Main entry game class
 * @export
 * @class Game
 * @extends {Phaser.Game}
 */
var text1;
var text2;
var words = [ 'Ouch!', 'bump', 'eek', 'look out', 'careful', 'mind out', 'watch it!', 'OI!', 'Owww', 'Grrrr', 'that hurt', 'bully'];


export class GameState  extends Phaser.Game {
    /**
     * Creates an instance of Game.
     * @memberof Game
     */
   
       constructor() {
        super(600, 400, Phaser.AUTO, 'game', null);
        
        this.state.add('Boot', Boot, false);
        this.state.add('Preloader', Preloader, false);
        this.state.add('MainMenu', MainMenu, false);
        this.state.add('Level01', Level01, false);

        this.state.start('Boot');
       
     
    }
    
   
}
