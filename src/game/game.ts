
// import pixi, p2 and phaser ce
import "pixi";
import "p2";
import * as Phaser from "phaser-ce";
//import { Boot } from './Boot';
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

function onCollide() {
    
        text1.text = this.game.rnd.pick(words);
    }
export class Game  {
    /**
     * Creates an instance of Game.
     * @memberof Game
     */
    game: Phaser.Game;
    sprite: Phaser.Sprite;
       constructor() {
        // call parent constructor
      //  super( 800, 600, Phaser.CANVAS, "game",  null)
      //super(1024, 800, Phaser.CANVAS, 'game', null);
      this.game = new Phaser.Game(1000, 600, Phaser.AUTO, 'game', {
        create: this.create, preload:
        this.preload, render: this.render, update:this.update
    });
       
     
    }
    
    preload() {
        this.game.load.bitmapFont('desyrel', 'assets/fonts/bitmapFonts/desyrel.png', 'assets/fonts/bitmapFonts/desyrel.xml');
        this.game.load.bitmapFont('stack', 'assets/fonts/bitmapFonts/shortStack.png', 'assets/fonts/bitmapFonts/shortStack.xml');
        
    }
    render() {
       
    }
    create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        text1 = this.game.add.bitmapText(200, 100, 'desyrel', 'BitmapText', 64);
        text2 = this.game.add.bitmapText(400, 400, 'stack', 'with Physics', 32);

        this.game.physics.enable(text1, Phaser.Physics.ARCADE);
        this.game.physics.enable(text2, Phaser.Physics.ARCADE);

        
        text1.body.collideWorldBounds = true;
        text1.body.bounce.set(1);

        
        text2.body.collideWorldBounds = true;
        text2.body.bounce.set(1);

        text1.body.velocity.setTo(200, 200);
        text2.body.velocity.setTo(-100, -100);
    
    }
    update() {
            //console.log('update');
            this.game.physics.arcade.collide(text1, text2, onCollide, null, this);
            //text1.text = this.game.rnd.pick(words);
        }

  //  onCollide(gameObject, bullet) {
   //     console.log('overlap')
        // do stuff here
   //  }
}
