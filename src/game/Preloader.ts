
import {Home} from './home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
export class Preloader extends Phaser.State {
    loaderText: Phaser.Text;
    logo;
    preLoadBar;
    
    constructor(public navParams: NavParams) {
        super();
    }
    preload() {
        this.logo = this.game.add.sprite(0, 0, 'logo');
        this.logo.anchor.setTo(0.5);
        //this.preLoadBar = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar')
        //this.preLoadBar.anchor.set(0.5);
        //this.load.setPreloadSprite(this.preLoadBar);
        
       
        //this.load.spritesheet('refresh', 'assets/images/refresh_button_sprite_sheet.png', 193, 71);
        //this.load.spritesheet('ok', 'assets/images/ok_button_sprite_sheet.png', 193, 71);
        this.load.image('backyard', 'assets/images/sky1.png');
        //this.load.image('backyard1', 'assets/images/sky.png');
        //this.load.image('diamond', 'assets/images/diamond.png');
        this.load.image('star', 'assets/images/star.png');
        //this.load.image('firstAid', 'assets/images/firstaid.png');
        //this.load.image('classBoard', 'assets/images/classroom-board.png');
        //this.load.image('line', 'assets/images/line.png');
        //this.load.image('selectBar', 'assets/images/selectbar.png');
        //this.load.image('no1', 'assets/images/no1.png');
        //this.load.image('ans', 'assets/images/ans.png');
        //this.load.image('plus', 'assets/images/plus.png');
        //this.load.image('equal', 'assets/images/equal.png');
        //this.load.image('sub', 'assets/images/sub.png');
        //this.load.image('divide', 'assets/images/divide.png');
        //this.load.image('multi', 'assets/images/multi.png');
        this.load.image('wrong', 'assets/images/wrong.png');
        this.load.image('correct', 'assets/images/correct.png');
        this.load.audio('tap', ['assets/mp3/tap.mp3', 'assets/mp3/tap.ogg']);
        this.load.audio('win', ['assets/mp3/win.mp3', 'assets/mp3/win.ogg']);
        this.load.audio('loss', ['assets/mp3/loss.mp3', 'assets/mp3/loss.ogg']);
        this.load.spritesheet('dude', 'assets/images/dude.png', 31,45,9,1,1);
        this.game.load.bitmapFont('desyrel', 'assets/fonts/bitmapFonts/desyrel.png', 'assets/fonts/bitmapFonts/desyrel.xml');
        this.game.load.bitmapFont('desyrel-pink', 'assets/fonts/bitmapFonts/desyrel-pink.png', 'assets/fonts/bitmapFonts/desyrel-pink.xml');
        this.game.load.bitmapFont('stack', 'assets/fonts/bitmapFonts/shortStack.png', 'assets/fonts/bitmapFonts/shortStack.xml');
  
    }

    create() {
        this.game.state.start('Home');
    }

    startMainMenu() {
       
    }

}
       