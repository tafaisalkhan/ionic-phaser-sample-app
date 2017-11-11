
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
export class MyGame extends Phaser.State {
   background;
   star;
   diamond;
   dude;
   uiBlocked: boolean = false;
   selectedItem;
   buttons = []
   firstAid;
   newItem;
   healthText;
   funText;
  socket;
   options: {'forceNew':true }
  statsDecreaser
    constructor(public navParams: NavParams) {
        super();
    }
    init(){
       //this.socket = io('http://localhost:3000', this.options);
       /* this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        */
    }
   

    create() {
        
        this.background = this.game.add.sprite(0,0, 'backyard');
        this.background.inputEnabled = true;
        this.background.events.onInputDown.add(this.placeItem, this);
        this.dude = this.game.add.sprite(100,400, 'dude');
        this.dude.customParams = {health: 100, fun: 100}

        this.dude.animations.add('funny', [1, 2, 3, 2, 1], 7, false);

        this.star = this.game.add.sprite(72,570, 'star');
        this.star.anchor.setTo(0.5);
        this.star.customParams = {healt:20};
        this.star.inputEnabled = true;
        this.star.events.onInputDown.add(this.pickItem, this);

        //custome properties
        this.star.customParams = {healt:100, fun:100};

        //draggable dude
        this.dude.inputEnabled = true;
        this.dude.input.enableDrag();

        this.diamond = this.game.add.sprite(288, 470, 'diamond');
        this.diamond.anchor.setTo(0.5);
        this.diamond.customParams = {health: -10, fun: 20}
        this.diamond.inputEnabled = true;
        this.diamond.events.onInputDown.add(this.pickItem, this);

        this.firstAid = this.game.add.sprite(288, 570, 'firstAid');
        this.firstAid.anchor.setTo(0.5);
        this.firstAid.customParams = {health: 10, fun: -10}
        this.firstAid.inputEnabled = true;
        this.firstAid.events.onInputDown.add(this.rotateDude, this);

        this.buttons = [this.star, this.diamond,this.firstAid] ;

        this.selectedItem = null;
        this.uiBlocked = false;

        var style ={font:'290x Arial', fill: '#fff'};
        this.game.add.text(10,20, 'Health:', style);
        this.game.add.text(140,20, 'Fun:', style);

        this.healthText  = this.game.add.text(80,20, '' , style);
        this.funText = this.game.add.text(185,20, '' , style);
        this.refreshStatus();

        this.statsDecreaser = this.game.time.events.loop(Phaser.Timer.SECOND * 5, this.reduceProperties, this);
    }
    rotateDude(sprite, event){
        if(!this.uiBlocked){
            console.log('rotating..;')
            this.uiBlocked = true;
            this.clearSelection();
            sprite.alpha = 0.4;
            
            var dudeRotation = this.game.add.tween(this.dude);
            dudeRotation.to({angle:'+720'}, 1000);
            dudeRotation.onComplete.add(function(){
                this.uiBlocked = false;
                sprite.a  =1;
                this.dude.customParams.health += 10;
                this.refreshStatus();
                this.clearSelection();
                console.log(this.dude);
            }, this);
            dudeRotation.start();
        }
    }
    pickItem(sprite, event){
        console.log('pick item');
      
        if(!this.uiBlocked){
            this.uiBlocked = false
            this.clearSelection();
            sprite.alpha = 0.4;
            this.selectedItem = sprite;
        }
    }
    placeItem(sprite, event){
        if(this.selectedItem && !this.uiBlocked){
            var x = event.position.x;
            var y = event.position.y;

            //var newItem  = this.game.add.sprite(x,y, this.selectedItem.key);
            //newItem.anchor.setTo(0.5);
            this.newItem = this.game.add.sprite(x,y, this.selectedItem.key);
            this.newItem.anchor.setTo(0.5);
            this.newItem.customParams = this.selectedItem.customParams

            this.uiBlocked = true;

            var dudeMovement = this.game.add.tween(this.dude);
            dudeMovement.to({x: x , y: y} , 700 );
            dudeMovement.onComplete.add(function()
            {
                this.uiBlocked = false;
                this.clearSelection();
                this.newItem.kill();
                //this.socket.disconnect();
                this.dude.animations.play('funny');

                var stat;
                for(stat in this.newItem.customParams){
                    if(this.newItem.customParams.hasOwnProperty(stat)){
                        console.log(stat);
                        this.dude.customParams[stat] += this.newItem.customParams[stat];
                    }
                }

                this.refreshStatus();

            }, this);
            
            dudeMovement.start();

        }
    }
    clearSelection(){
        this.buttons.forEach(function(element, index){
            element.alpha = 1;
        })
        this.selectedItem = null;
    }
    refreshStatus(){
        this.healthText.text = this.dude.customParams.health;
        this.funText.text = this.dude.customParams.fun;
    }
    reduceProperties(){
        this.dude.customParams.health -= 10;
        this.dude.customParams.fun -= 15;
        this.refreshStatus();
    }
    update() {
        if(this.dude.customParams.health <= 0 || this.dude.customParams.fun <= 0){
            this.dude.frame = 5;
            this.uiBlocked = true;

            this.game.time.events.add(2000, this.gameOver, this);
        }
      
    }
    gameOver(){
        this.state.start('Home', true, false, 'GAME OVER');
        //this.game.state.restart();
    }
  
}
