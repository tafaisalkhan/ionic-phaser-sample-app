
export class Home extends Phaser.State {
    
   background;
   typeHeading;
   startGame; 
   message;
   fontColors = [0xff0000, 0x0000ff];
    init(message){
        debugger;
        this.message = message;
    }
    create() {
        this.background = this.game.add.sprite(0, 0, 'backyard');
        this.background.inputEnabled = true;

        this.background.events.onInputDown.add(function(){
            //this.state.start('Add')
            var audo = this.game.add.audio('tap');
            audo.play();
            this.state.start('MyGame');
        }, this)

     
       var style = {font:'35px Arial', fill: '#fff'};
       //this.game.add.text(30, this.game.world.centerY + 200, 'Touch To Start', style);
        
        if(this.message){
            if(this.message.correctAnswer > this.message.wrongAnswer){
                var audo = this.game.add.audio('win');
                audo.play();
           }
           else if(this.message.correctAnswer < this.message.wrongAnswer){
                var audo = this.game.add.audio('loss');
                audo.play();
           }
           else{
                var audo = this.game.add.audio('win');
                audo.play();
           }
        
            this.game.add.bitmapText(100, 50, 'stack', 'Score', 40);
            
    
            this.game.add.bitmapText(25, 150, 'desyrel', "Question:", 30);
            var temp = this.game.add.bitmapText(200, 150, 'desyrel', this.message.totalQuestion, 30);
            temp.tint = this.fontColors[1];
            this.game.add.bitmapText(25, 200, 'desyrel', "Points:", 30);
            var temp =  this.game.add.bitmapText(200, 200, 'desyrel', this.message.points, 30);
            temp.tint = this.fontColors[1];
            this.game.add.bitmapText(25, 250, 'desyrel', "Correct:", 30);
            var temp = this.game.add.bitmapText(200, 250, 'desyrel', this.message.correctAnswer, 30);
            temp.tint = this.fontColors[1];
            this.game.add.bitmapText(25, 300, 'desyrel', "Wrong:", 30);
            var temp = this.game.add.bitmapText(200, 300, 'desyrel', this.message.wrongAnswer, 30);
            temp.tint = this.fontColors[1];
            this.game.add.bitmapText(30, 450 , 'stack', 'Touch To Re-Start', 30);
           
        }
        else{
            this.game.add.bitmapText(10, 250 , 'stack', 'Touch To Start', 40);
        }
    }

    

}