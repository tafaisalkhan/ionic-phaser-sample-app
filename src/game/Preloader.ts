
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
        this.logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        this.logo.anchor.setTo(0.5);
        this.preLoadBar = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar')
        this.preLoadBar.anchor.set(0.5);
        this.load.setPreloadSprite(this.preLoadBar);
        
       
        this.load.spritesheet('refresh', 'assets/images/refresh_button_sprite_sheet.png', 193, 71);
        this.load.spritesheet('ok', 'assets/images/ok_button_sprite_sheet.png', 193, 71);
        this.load.image('backyard', 'assets/images/sky.png');
        this.load.image('diamond', 'assets/images/diamond.png');
        this.load.image('star', 'assets/images/star.png');
        this.load.image('firstAid', 'assets/images/firstaid.png');
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
       