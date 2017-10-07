import {Preloader} from './Preloader';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
export class Boot extends Phaser.State {
    text1;
    text2;
    tweenBar;
    image;
    words = [ 'Ouch!', 'bump', 'eek', 'look out', 'careful', 'mind out', 'watch it!', 'OI!', 'Owww', 'Grrrr', 'that hurt', 'bully'];
    navCtrl: NavController;
    constructor(public navParams: NavParams) {
        super();
    }
    preload() {
        this.game.load.bitmapFont('desyrel', 'assets/fonts/bitmapFonts/desyrel.png', 'assets/fonts/bitmapFonts/desyrel.xml');
        this.game.load.bitmapFont('stack', 'assets/fonts/bitmapFonts/shortStack.png', 'assets/fonts/bitmapFonts/shortStack.xml');
        this.game.load.image('bar', 'assets/logo.png');
    }

    create() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        
        this.text1 = this.game.add.bitmapText(200, 100, 'desyrel', 'BitmapText', 64);
        this.text2 = this.game.add.bitmapText(400, 400, 'stack', 'with Physics', 32);
        this.image = this.game.add.sprite(0, 0, 'bar');

        this.game.physics.enable(this.text1, Phaser.Physics.ARCADE);
        this.game.physics.enable(this.text2, Phaser.Physics.ARCADE);
        this.game.physics.enable(this.image, Phaser.Physics.ARCADE)
        
        this.text1.body.collideWorldBounds = true;
        this.text1.body.bounce.set(1);

        
        this.text2.body.collideWorldBounds = true;
        this.text2.body.bounce.set(1);

        this.image.body.collideWorldBounds = true;
        //this.image.body.bounce.set(1);

        this.text1.body.velocity.setTo(200, 200);
        this.text2.body.velocity.setTo(-100, -100);
        //this.image.body.velocity.setTo(200, 200);
        
        //this.image.body.collideWorldBounds = true;
        //this.text1.body.bounce.set(1);
        
            //this.game.physics.enable(this.image, Phaser.Physics.ARCADE);
            this.tweenBar = this.game.add.tween(this.image).to( { x: 100 }, 2000, "Quart.easeOut"); 
           // image.body.velocity.x=150;
    }
    update() {
        //console.log('update');
        //this.text1.rotation = 0.1;
        this.game.physics.arcade.collide(this.text1, this.text2, this.onCollide, null, this);
       // this.game.physics.arcade.collide(this.image, this.text2, this.onCollide, null, this);
       // this.game.physics.arcade.collide(this.image, this.text1, this.onCollide, null, this);
        this.tweenBar.start();
        //text1.text = this.game.rnd.pick(words);
    }
  onCollide(gameObject, bullet) {
        console.log('overlap')
        this.text1.text = this.game.rnd.pick(this.words);
        //this.navCtrl.push('HomePage');
    }
}
