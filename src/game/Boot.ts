import {Preloader} from './Preloader';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
export class Boot extends Phaser.State {
        navCtrl: NavController;
    constructor(public navParams: NavParams) {
        super();
    }
    init(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    }
    preload() {
        this.game.load.image('preloadbar', 'assets/images/loader.png');
        this.game.load.image('logo', 'assets/images/logo.png');
    }

    create() {
        this.game.stage.backgroundColor = '#fff'
        this.state.start('Preloader');
    }
  
 
}