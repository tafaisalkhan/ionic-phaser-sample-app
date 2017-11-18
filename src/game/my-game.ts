
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
   correctResult = 0;
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
   timer: number = 20;
   userOptionSelected;
   questionNo=1;
   pointNo = 10;
   level = 10;
   mutipulLevel = 2;
   typeHeading;
   operation;
   levelType;
   correctAnswer = 0;
   wrongAnswer = 0;
   audio;
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
        //this.timer = 20;
        this.questionNo = 1;
        this.pointNo = 30;
        this.updateTrue = false;
       // this.background = this.game.add.sprite(0,0, 'backyard');
       
       this.timer = 20;
  
        this.game.add.bitmapText(10, 20, 'stack', 'Q.No:', 20);
        this.game.add.bitmapText(140, 20, 'stack', 'Timer:', 20);
        this.game.add.bitmapText(280, 20, 'stack', 'Points:', 20);

        this.questionCount  = this.game.add.bitmapText(25, 40, 'desyrel', this.questionNo+"", 20);
        this.questionCount.tint = this.fontColors[1];
        this.timerCount  = this.game.add.bitmapText(155, 40, 'desyrel', this.timer+"", 20);
        this.timerCount.tint = this.fontColors[0];
        this.pointsCount  = this.game.add.bitmapText(310, 40, 'desyrel', this.pointNo+"", 20);
        this.pointsCount.tint = this.fontColors[1];
        this.game.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
      
        this.option1 = this.game.add.bitmapText(50, 400, 'desyrel', '?', 30);
        this.option2 = this.game.add.bitmapText(170, 400, 'desyrel', '?', 30);
        this.option3 = this.game.add.bitmapText(300, 400, 'desyrel', '?', 30);
        this.option1.inputEnabled = true;
        this.option2.inputEnabled = true;
        this.option3.inputEnabled = true;
        this.option1.events.onInputDown.add(this.resultSelected, this);
        this.option1.anchor.setTo(0.5);
        this.option1.customParams = {value: 0};
        this.option2.anchor.setTo(0.5);
        this.option2.events.onInputDown.add(this.resultSelected, this);
        this.option2.customParams = {value: 0};
        this.option3.anchor.setTo(0.5);
        this.option3.events.onInputDown.add(this.resultSelected, this);
        this.option3.customParams = {value: 0};
        this.updateQuestion();
    }
    updateCounter(){
        this.timer --;
        if(this.timer == 0 || this.pointNo < 0){
            this.gameOver();
        }
       
        this.timerCount.setText( this.timer);
    }
    resultSelected(sprite, event){
        var tap = this.game.add.audio('tap');
        tap.play();
        
        if (!this.uiBlocked){
            this.uiBlocked = true
            console.log('result selected');
            debugger;
            //sprite.scale.set(2, 2);
            this.game.add.tween(sprite.scale).to( { x: 1.5, y:1.5 }, 1000, Phaser.Easing.Bounce.Out, true);
            console.log(sprite.text);
            this.timer = 22;
            var tween = this.game.add.tween(this.timerCount).to( { alpha: 0 }, 200, Phaser.Easing.Linear.None, true);
            tween.start();
            console.log("selected Answer " + sprite.customParams.value );
            console.log("selected Answer text " + sprite.text );
            console.log("compared Answer " + this.correctResult );
           
            if(sprite.text ==  this.correctResult){
                this.audio = this.game.add.audio('win').play();
               
                this.userOptionSelected = this.game.add.sprite(sprite.x, sprite.y, 'correct');
                this.correctAnswer ++;
                this.userOptionSelected.anchor.setTo(0.5);
                this.userOptionSelected.scale.setTo(2, 2);
                this.pointNo = this.pointNo + 10
                if(this.levelType < 3){
                    if(this.pointNo > 100 && this.pointNo < 150){
                        this.level = this.level + 10;
                        this.mutipulLevel = this.mutipulLevel + 1;
                    }
                    else if(this.pointNo > 150 && this.pointNo < 200){
                        this.level = this.level + 10;
                        this.mutipulLevel = this.mutipulLevel + 1;
                    }
                    else if(this.pointNo > 200 && this.pointNo < 250){
                        this.level = this.level + 10;
                        this.mutipulLevel = this.mutipulLevel + 1;
                    }
                    else if(this.pointNo > 250 && this.pointNo < 300){
                        this.level = this.level + 10;
                        this.mutipulLevel = this.mutipulLevel + 1;
                    }
                    else if(this.pointNo > 350 && this.pointNo < 400){
                        this.level = this.level + 10;
                        this.mutipulLevel = this.mutipulLevel + 1;
                    }
                    else if(this.pointNo > 400){
                        this.level = this.level + 10;
                        this.mutipulLevel = this.mutipulLevel + 1;
                    }
                }
                else{
                   
                   
                    if(this.pointNo > 100 && this.pointNo < 150){
                        this.level = (this.level -5) + 1;
                        this.mutipulLevel = this.mutipulLevel - 1;
                    }
                    else if(this.pointNo > 150 && this.pointNo < 200){
                        this.level = (this.level -5) + 1;
                        this.mutipulLevel = this.mutipulLevel - 1;
                    }
                    else if(this.pointNo > 200 && this.pointNo < 250){
                        this.level = (this.level -5) + 1;
                        this.mutipulLevel = this.mutipulLevel - 1;
                    }
                    else if(this.pointNo > 250 && this.pointNo < 300){
                        this.level = (this.level -5) + 1;
                        this.mutipulLevel = this.mutipulLevel - 1;
                    }
                    else if(this.pointNo > 350 && this.pointNo < 400){
                        this.level = (this.level -5) + 1;
                        this.mutipulLevel = this.mutipulLevel - 1;
                    }
                    else if(this.pointNo > 400){
                        this.level = (this.level -5) + 1;
                        this.mutipulLevel = this.mutipulLevel - 1;
                    }
                }
            }
            else{
                this.audio = this.game.add.audio('loss').play();

                this.userOptionSelected = this.game.add.sprite(sprite.x, sprite.y, 'wrong');
                this.userOptionSelected.anchor.setTo(0.5);
                this.userOptionSelected.scale.setTo(2, 2);
                this.pointNo = this.pointNo - 10;
                this.wrongAnswer ++;
        
                if(this.pointNo < 100){
                    this.level = 10;
                }
            }
            this.questionNo++;
            this.pointsCount.setText(this.pointNo);
            this.questionCount.setText(this.questionNo);
            this.hideNumber()

            this.game.time.events.repeat(Phaser.Timer.SECOND * 2, 1, this.updateGame, this);
    }
        //this.updateTrue = false;
        
    }
    updateGame(){
        this.updateTrue = false;
        
        this.updateQuestion()        
        var tween = this.game.add.tween(this.timerCount).to( { alpha: 1 }, 100, Phaser.Easing.Linear.None, true);
        tween.start();
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
    updateQuestion(){
        this.levelType  = this.randomNo(1, 3)
        
        console.log("type : " +this.levelType)
        this.setQuizItem(this.levelType);
        if(this.levelType == 1){
            var generateNo1 = this.randomNo(1, this.level); 
            this.firstNo.setText(generateNo1);
            this.firstNo.alpha = 0;
            var generateNo2 = this.randomNo(generateNo1, generateNo1 + this.level)
            this.secNo.setText(generateNo2); 
            this.secNo.alpha = 0
            this.correctResult = parseInt(generateNo1+"") + parseInt(generateNo2+"") ;

        }
        else if(this.levelType == 2){
            var generateNo1 = this.randomNo(1, this.level); 
            var generateNo2 = this.randomNo(generateNo1, generateNo1 + this.level)
            this.firstNo.setText(generateNo2);
            this.firstNo.alpha = 0;
            this.secNo.setText(generateNo1); 
            this.secNo.alpha = 0
            this.correctResult = generateNo2 - generateNo1 ;
        }
        else if(this.levelType == 3){
            var generateNo1 = this.randomNo(1, this.mutipulLevel); 
            this.firstNo.setText(generateNo1);
            this.firstNo.alpha = 0;
            var generateNo2 = this.randomNo(generateNo1, generateNo1 + this.mutipulLevel)
            this.secNo.setText(generateNo2); 
            this.secNo.alpha = 0
            this.correctResult = generateNo1 * generateNo2 ;



        }



        var hideNo = this.randomNo(1,3);
        if(hideNo == 1){
            this.firstNo.setText("?")
            this.secNo.setText(generateNo2)
            this.resultNo.setText(this.correctResult);
            this.correctResult = generateNo1;
        }
        else if(hideNo == 2){
            this.firstNo.setText(generateNo1)
            this.secNo.setText("?")
            this.resultNo.setText(this.correctResult);
            this.correctResult = generateNo2;
        }
        else{
            this.firstNo.setText(generateNo1)
            this.secNo.setText(generateNo2)
            this.resultNo.setText("?");
           
        }

        var optionCorrect = this.randomNo(1,3);
        if(optionCorrect == 3){
           this.option1.setText((generateNo1 + generateNo2)  - this.randomNo(generateNo1, generateNo2));
            this.option1.customParams = {value: (generateNo1 + generateNo2)  - this.randomNo(generateNo1, generateNo2)}
            this.option1.alpha = 0
            this.option2.setText((generateNo1 + generateNo2)  - this.randomNo(generateNo2, generateNo1));
            this.option2.customParams = {value: (generateNo1 + generateNo2)  - this.randomNo(generateNo2, generateNo1)}
            this.option2.alpha = 0
            this.option3.setText(this.correctResult);
            //this.option3.customParams = {value: this.correctResult}
            this.option3.customParams.value =  this.correctResult;
            this.option3.alpha = 0

       }
        else if (optionCorrect == 2){     
            this.option1.setText((generateNo1 + generateNo2)  - this.randomNo(generateNo1, generateNo2));
            this.option1.customParams = {value: (generateNo1 + generateNo2)  - this.randomNo(generateNo1, generateNo2)}
            this.option1.alpha = 0
            this.option2.setText(this.correctResult);
            //this.option2.customParams = {value: this.correctResult}
            this.option2.customParams.value = this.correctResult;
            this.option2.alpha = 0
            this.option3.setText((generateNo1 + generateNo2)  - this.randomNo(generateNo2, generateNo1));
            this.option3.customParams = {value: (generateNo1 + generateNo2)  - this.randomNo(generateNo2, generateNo1)}
            this.option3.alpha = 0
            console.log(this.correctResult);
        }

        else {     
            this.option1.setText(this.correctResult);
            //this.option1.customParams = {value: this.correctResult}
            this.option1.customParams.value = this.correctResult;
            this.option1.alpha = 0
            this.option2.setText((generateNo1 + generateNo2)  - this.randomNo(generateNo1, generateNo2));
            this.option2.customParams = {value: (generateNo1 + generateNo2)  - this.randomNo(generateNo1, generateNo2)}
            this.option2.alpha = 0
            this.option3.setText((generateNo1 + generateNo2)  - this.randomNo(generateNo2, generateNo1));
            this.option3.customParams = {value: (generateNo1 + generateNo2)  - this.randomNo(generateNo2, generateNo1)}
            this.option3.alpha = 0
            console.log(this.correctResult);
        }
        
      
        var tween = this.game.add.tween(this.typeHeading).from( { y: 1 }, 200, Phaser.Easing.Linear.None, true);
        tween.start();

        var tween = this.game.add.tween(this.firstNo).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
        tween.start();

        tween = this.game.add.tween(this.operation).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
        tween.start();

        tween = this.game.add.tween(this.secNo).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
        tween.start();

        tween = this.game.add.tween(this.resultNo).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
        tween.start();

        tween = this.game.add.tween(this.resultNo).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
        tween.start();

        tween = this.game.add.tween(this.option1).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
        tween.start();

        tween = this.game.add.tween(this.option2).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
        tween.start();

        tween = this.game.add.tween(this.option3).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
        tween.start();
        
        this.uiBlocked = false;


       
        console.log(this.correctResult);
        
    
    }
    setQuizItem(type){
        var style ={font:'290x Arial', fill: 'bule'};
        try{
            this.audio.stop();
        }
        catch(e){

        }
        this.refreshStatus();
        this.option1.scale.setTo(1, 1);
        this.option2.scale.setTo(1, 1);
        this.option3.scale.setTo(1, 1);

        if(type == 1 ){
            this.typeHeading  = this.game.add.bitmapText(100, 100, 'stack', 'Addition', 40);
            this.operation = this.game.add.bitmapText(110, 250, 'stack', '+', 45);
            this.operation.anchor.setTo(0.5);
        }
        else  if(type == 2 ){
            this.typeHeading  = this.game.add.bitmapText(50, 100, 'stack', 'Subtraction', 40);
            this.operation = this.game.add.bitmapText(110, 250, 'stack', '-', 45);
            this.operation.anchor.setTo(0.5);
        }
        else  if(type == 3 ){
            this.typeHeading  = this.game.add.bitmapText(30, 100, 'stack', 'Multiplication', 40);
            this.operation = this.game.add.bitmapText(110, 250, 'stack', '*', 45);
            this.operation.anchor.setTo(0.5);
        }
        else  {
            this.typeHeading  = this.game.add.bitmapText(100, 100, 'stack', 'Division', 40);
            this.operation = this.game.add.bitmapText(110, 250, 'stack', '/', 45);
            this.operation.anchor.setTo(0.5);
        }
        
        this.firstNo = this.game.add.bitmapText(50, 250, 'desyrel', '?', 45);
        this.firstNo.tint = this.fontColors[1];
        this.firstNo.anchor.setTo(0.5);
       
        this.secNo = this.game.add.bitmapText(170, 250, 'desyrel', '?', 45);
        this.secNo.tint = this.fontColors[1];
        this.secNo.anchor.setTo(0.5);
        this.other = this.game.add.bitmapText(230, 250, 'stack', '=', 60);
        this.other.anchor.setTo(0.5);
        this.resultNo = this.game.add.bitmapText(300, 250, 'desyrel', '?', 45);
        this.resultNo.tint = this.fontColors[0];
        this.resultNo.anchor.setTo(0.5);


        this.other  = this.game.add.bitmapText(150, 350, 'stack', 'Select Correct Answer', 20);
        this.other.anchor.setTo(0.5);

        

       
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
      
       if(!this.updateTrue){
                console.log('update')
                this.updateTrue = true
               

                //this.option1.setText()



           
        }
    }
    hideNumber(){
    
        var tween = this.game.add.tween(this.userOptionSelected).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
        tween.start();
        var tween = this.game.add.tween(this.firstNo).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
        tween.start();

        tween = this.game.add.tween(this.secNo).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
        tween.start();

        tween = this.game.add.tween(this.operation).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
        tween.start();

        tween = this.game.add.tween(this.resultNo).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
        tween.start();

        tween = this.game.add.tween(this.option1).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
        tween.start();

        tween = this.game.add.tween(this.option2).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
        tween.start();

        tween = this.game.add.tween(this.option3).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
        tween.start();

        tween = this.game.add.tween(this.typeHeading).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
        tween.start();

        
    }
    gameOver(){
        this.state.start('Home', true, false, {totalQuestion: this.questionNo, correctAnswer:this.correctAnswer, wrongAnswer:this.wrongAnswer, points: this.pointNo  });
        //this.game.state.restart();
    }
   
    randomNo(startNo:number , endNo: number){
        //return  Math.floor(Math.random() * endNo) + startNo ;
        return Math.floor(Math.random()*(endNo-startNo+1)+startNo);
      }
    checkOverlap(spriteA, spriteB) {
        
         var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
      
          return Phaser.Rectangle.intersects(boundsA, boundsB);
        
        }
  
}
