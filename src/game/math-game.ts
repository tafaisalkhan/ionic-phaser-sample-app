
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
export class MathGame extends Phaser.State {
   background;
  
   uiBlocked: boolean = false;
   selectedItem;
   newItem;
   socket;
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
       
   
        var style ={font:'290x Arial', fill: 'bule'};
        
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
        
   
        //this.statsDecreaser = this.game.time.events.loop(Phaser.Timer.SECOND * 5, this.reduceProperties, this);
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
       
    }
    clearSelection(){
      
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
