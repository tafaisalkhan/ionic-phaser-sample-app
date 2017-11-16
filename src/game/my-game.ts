
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
   firstNumber;
   secNumber;
   secNo;
   firstNo;
   resultNo;
   other;
   selcedNumber;
   questionCount;
   timerCount;
   pointsCount;
   fontColors = [0xff0000, 0x0000ff];
   updateTrue; false;
   option1;
   option2;
   option3;
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
       
       /* this.background.inputEnabled = true;
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
*/
        var style ={font:'290x Arial', fill: 'bule'};
        //this.game.add.text(10,20, 'Question No:', style);
        //this.game.add.text(140,20, 'Timer:', style);
        //this.game.add.text(280,20, 'Points:', style);

        //this.healthText  = this.game.add.text(80,20, '' , style);
        //this.funText = this.game.add.text(185,20, '' , style);
        this.game.add.bitmapText(10, 20, 'stack', 'Q.No:', 20);
        this.game.add.bitmapText(140, 20, 'stack', 'Timer:', 20);
        this.game.add.bitmapText(280, 20, 'stack', 'Points:', 20);

        this.questionCount  = this.game.add.bitmapText(25, 40, 'desyrel', '23', 20);
        this.questionCount.tint = this.fontColors[1];
        this.timerCount  = this.game.add.bitmapText(155, 40, 'desyrel', '100', 20);
        this.timerCount.tint = this.fontColors[0];
        this.pointsCount  = this.game.add.bitmapText(310, 40, 'desyrel', '0', 20);
        this.pointsCount.tint = this.fontColors[1];
        this.refreshStatus();


        this.other  = this.game.add.bitmapText(100, 100, 'stack', 'Addition', 40);
        this.firstNo = this.game.add.bitmapText(50, 250, 'desyrel', '888', 45);
        this.firstNo.tint = this.fontColors[1];
        this.firstNo.anchor.setTo(0.5);
        this.other = this.game.add.bitmapText(110, 250, 'stack', '+', 45);
        this.other.anchor.setTo(0.5);
        this.secNo = this.game.add.bitmapText(170, 250, 'desyrel', '888', 45);
        this.secNo.tint = this.fontColors[1];
        this.secNo.anchor.setTo(0.5);
        this.other = this.game.add.bitmapText(230, 250, 'stack', '=', 60);
        this.other.anchor.setTo(0.5);
        this.resultNo = this.game.add.bitmapText(300, 250, 'desyrel', '888', 45);
        this.resultNo.tint = this.fontColors[0];
        this.resultNo.anchor.setTo(0.5);


        this.other  = this.game.add.bitmapText(150, 350, 'stack', 'Select Correct Answer', 20);
        this.other.anchor.setTo(0.5);

        this.option1 = this.game.add.bitmapText(50, 400, 'desyrel', '888', 30);
        this.option2 = this.game.add.bitmapText(170, 400, 'desyrel', '888', 30);
        this.option3 = this.game.add.bitmapText(300, 400, 'desyrel', '888', 30);

        this.option1.inputEnabled = true;
        this.option1.events.onInputDown.add(this.resultSelected, this);
        this.option1.anchor.setTo(0.5);
        this.option2.anchor.setTo(0.5);
        this.option3.anchor.setTo(0.5);
        
        //this.firstNo.text = "1"
        //this.firstNo = this.game.add.bitmapText(30, 180, 'stack', '1', 40);

/*
        var coins = this.game.add.group();
        
            //  Now let's add 50 coins into it
            var x =  120;
            var y = 280;
            debugger;
            for (var i = 0; i < 10; i++)
            {

                if(i == 3){
                   
                    y += 80;
                    x =  120;
                }
                else if(i == 6){
                   
                    y += 80;
                    x =  120;
                   
                }
                else if(i == 9){
                    
                     y += 80;
                     x = 170;
                    
                 }
                
                 this.secNumber = this.game.add.bitmapText(x, y, 'desyrel-pink', i+"",  32);
              
                x += 50;
           
                this.secNumber.inputEnabled = true;
                this.secNumber.input.enableDrag();
                this.secNumber.customParams = {value: i}
                this.secNumber.events.onInputDown.add(this.numberClick, this);
                this.secNumber.events.onDragStart.add(this.onDragStart, this);
                this.secNumber.events.onDragStop.add(this.onDragStop, this);
                this.secNumber.anchor.setTo(0.5);
            }
        
  */  
            //coins.scale.set(2, 2);

        var button = this.game.add.button(5, 550, 'refresh', this.actionRefresh, this, 2, 1, 0);
        button.scale.setTo(0.4, 0.4);
        var button = this.game.add.button(275, 550, 'ok', this.actionOnClick, this, 2, 1, 0);
        button.scale.setTo(0.4, 0.4);
        this.statsDecreaser = this.game.time.events.loop(Phaser.Timer.SECOND * 5, this.reduceProperties, this);
    }
    resultSelected(sprite, event){
        console.log('result selected');
        //sprite.scale.set(2, 2);
        this.game.add.tween(sprite.scale).to( { x: 1.5, y:1.5 }, 1000, Phaser.Easing.Bounce.Out, true);
        var userOptionSelected = this.game.add.sprite(sprite.x, sprite.y, 'wrong');
        userOptionSelected.anchor.setTo(0.5);
        userOptionSelected.scale.setTo(2, 2);
        
    }
    onDragStart(sprite, event){
        sprite.alpha = 0.4;
        sprite.y = sprite.y - 30;
        sprite.scale.set(2, 2);
        this.selcedNumber = sprite

        //copy sprite
        this.secNumber = this.game.add.sprite(sprite.x, sprite.y + 30 , sprite.generateTexture());
        this.secNumber.customParams = {value: sprite.customParams.value}
        this.secNumber.inputEnabled = true;
        this.secNumber.input.enableDrag();
        this.secNumber.events.onDragStart.add(this.onDragStart, this);
        this.secNumber.events.onDragStop.add(this.onDragStop, this);
        this.secNumber.events.onInputDown.add(this.numberClick, this);
        this.secNumber.anchor.setTo(0.5);
        
    }
    onDragStop(sprite, event){
        sprite.kill();
        this.updateTrue = false;
        this.game.time.events.add(500, this.resetBtn, this);
        this.selcedNumber = undefined;
    }
    actionRefresh(){
        this.firstNo.kill();
        //this.secNo.kill();
        //this.firstNo.text = "?"
       this.firstNo = this.game.add.bitmapText(50, 180, 'desyrel', '?', 40);
       this.firstNo.tint = this.fontColors[1];
       this.secNo = this.game.add.bitmapText(170, 180, 'desyrel', '?', 40);
       this.secNo.tint = this.fontColors[1];
    }
    actionOnClick(){

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
    numberClick(sprite, events){
        console.log(sprite._text);;
        
    }
    resetBtn(){
        //this.selcedNumber.scale.set(1);
        //this.selcedNumber.alpha = 1;
        
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
       // this.healthText.text = this.dude.customParams.health;
       // this.funText.text = this.dude.customParams.fun;
    }
    reduceProperties(){
        //this.dude.customParams.health -= 10;
        //this.dude.customParams.fun -= 15;
        this.refreshStatus();
    }
    update() {
        //if(this.dude.customParams.health <= 0 || this.dude.customParams.fun <= 0){
         //   this.dude.frame = 5;
          //  this.uiBlocked = true;

            //this.game.time.events.add(2000, this.gameOver, this);
       // }
      
       if(this.selcedNumber != undefined && !this.updateTrue){
            if (this.checkOverlap(this.selcedNumber, this.firstNo))
            {
                try{
                    if(isNaN(parseInt(this.firstNo.text))){
                        this.firstNo.text = this.selcedNumber.customParams.value;
                    }
                    else{
                        var tmp = parseInt(this.firstNo.text);
                        tmp = tmp + this.selcedNumber.customParams.value;
                        this.firstNo.text = tmp;
                    }
                   

                
                }
                catch(e){

                }
                console.log('Drag the sprites. Overlapping: true');
                this.updateTrue = true
            }
            else  if (this.checkOverlap(this.selcedNumber, this.secNo))
            {
                try{
                    if(isNaN(parseInt(this.secNo.text))){
                        this.secNo.text = this.selcedNumber.customParams.value;
                    }
                    else{
                        var tmp = parseInt(this.secNo.text);
                        tmp = tmp + this.selcedNumber.customParams.value;
                        this.secNo.text = tmp;
                    }
               
                }
                catch(e){

                }
                console.log('Drag the sprites. Overlapping: false');
                this.updateTrue = true;
            }
         }
    }
    gameOver(){
        this.state.start('Home', true, false, 'GAME OVER');
        //this.game.state.restart();
    }
    checkOverlap(spriteA, spriteB) {
        
         var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
      
          return Phaser.Rectangle.intersects(boundsA, boundsB);
        
        }
  
}
