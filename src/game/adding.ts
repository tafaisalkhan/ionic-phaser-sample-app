
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
import { GameServiceProvider } from '../providers/game-service/game-service';
export class Adding extends Phaser.State {
    background;
    heading;
    numberGroup;
    genrateNo;
    gameService: GameServiceProvider
    line;
    numberSprite =[];
    index = 0;
    tmpOperator;
    classBoard;
    constructor(public navParams: NavParams) {
        super();
    }
    init(){
      
    }
   

    create() {
        var twoNumber =[
           
            {
                x:180 , y:180,
                
            },
            {
                x:180 , y:240,
                
            },
            {
                x:140 , y:240,
                
            }
        ]
        debugger;
        this.navParams
        var style ={font:'190x Arial', fill: 'white' ,size: 120};
        //this.background = this.game.add.sprite(0, 0, 'backyard');
        this.game.add.bitmapText(10, 30, 'stack', 'Level', 15);

        this.game.add.bitmapText(10, 80, 'stack', 'Time', 15);
        this.game.add.bitmapText(10, 130, 'stack', 'Points', 15);
        this.classBoard = this.game.add.sprite(80, 10, 'classBoard');
        this.game.add.sprite(120, 60, 'no1');
        //this.game.add.sprite(160, 60, 'plus');
        //this.game.add.sprite(160, 60, 'sub');
        //this.game.add.sprite(160, 60, 'divide');
        this.game.add.sprite(160, 60, 'multi');
        this.game.add.sprite(200, 60, 'no1');
        this.game.add.sprite(240, 60, 'equal');
        this.game.add.sprite(280, 60, 'no1');

        this.game.add.sprite(120, 120, 'ans');
        this.game.add.sprite(200, 120, 'ans');
        this.game.add.sprite(280, 120, 'ans');
        //this.heading  = this.game.add.bitmapText(170, 20, 'stack', 'Addition', 20);
       // this.heading  =  this.game.add.text(170,20, 'Adding', style);
       // this.heading = 160;
        //this.heading.tint = "#4488AA";//"0xffff00";
        this. numberGroup = this.game.add.group();
        var text = this.game.add.text(220,40, "Adding", style);

        var text = this.game.add.text(140,80, "34", style);

        var text = this.game.add.text(220,80, "34", style);

        text.anchor.setTo(0.5);
    
        text.font = 'Revalia';
        text.fontSize = 20;

        var self = this;

    /*    twoNumber.forEach(function(element,index){
            console.log(element);
            console.log(index);
            if(index == 2)
            {
                self.game.add.bitmapText(element.x, element.y, 'desyrel-pink',  "+",  60);
               
            }
            else{
                debugger;
                var number = self.game.add.bitmapText(element.x, element.y, 'desyrel-pink', 1 + "",  60);
                console.log(number);
                
                self.numberSprite.push(number);
            }
           // self.numberGroup.create(element.x, element.y ,'dude', 0);
        })
        this.game.add.sprite(120, 320, 'line' );
        this.game.add.sprite(170, 190, 'selectBar' );
      */  
      
        //this.alpahItem();
        //his.game.stage.backgroundColor = '#124184';
       // this.line = new Phaser.Line(180, 50, 300, 50);
       
        //this.line.centerOn(200, 200);
       // for (var i = 0; i < 2; i++)
       // {
        //    this.numberGroup.create(this.game.world.randomX / 2, this.game.world.randomY / 2, 'dude', 0);
        //}
        //this.numberGroup.scale.set(2, 2);
        //this.background = this.game.add.sprite(0,0, 'backyard');
        //this.line.centerOn(this.game.input.activePointer.x, this.game.input.activePointer.y);
    }
    startAnimation(){
        console.log("time completed" + this.index)
        debugger
        if(this.numberSprite.length > this.index){
            this.numberSprite[this.index].alpha = 0.4;
            this.numberSprite[this.index].scale.setTo(1.5, 1.5);
            this.index ++;
            this.alpahItem();
        }
        else
        {
            var bounce= this.game.add.tween(this.numberSprite[0]);
            
                bounce.to({y: this.numberSprite[0].y + 130} , 1000 , Phaser.Easing.Bounce.In);
                bounce.onComplete.add(this.startBounceTween, this);
                bounce.start();
        }
    }
    startBounceTween(){
        var bounce= this.game.add.tween(this.numberSprite[1]);
    
        this.tmpOperator = this.game.add.bitmapText(155, 340, 'desyrel-pink',  "+",  60);
        
        bounce.to({x: this.numberSprite[0].x - 70, y: this.numberSprite[0].y } , 1000 , Phaser.Easing.Bounce.In);
        bounce.onComplete.add(this.addNumber, this);
        bounce.start();
    }
    update() {
        
        //this.line.rotate(0.05);
    }
    addNumber(){
        console.log('calculate')
        this.numberSprite[0].kill();
        this.numberSprite[1].kill();
        this.tmpOperator.kill();
        var result = this.game.add.bitmapText(170, 320, 'desyrel-pink',  "2" ,  80);
        result.alpha = 0 ;
        //this.game.add.tween(result).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 1, 1, true);
        this.game.add.tween(result).to( {alpha: 1 }, 1000, Phaser.Easing.Bounce.Out, true);
    }
    gameOver(){
      
    }
    alpahItem(){
        this.game.time.events.repeat(Phaser.Timer.SECOND * 2, 1, this.startAnimation, this);
    }
    checkOverlap(spriteA, spriteB) {
    }
   render() {
        
          // this.game.debug.geom(this.line);
         //   this.game.debug.lineInfo(this.line, 32, 32);
        
        }
}
