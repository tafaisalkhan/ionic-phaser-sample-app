
export class Home extends Phaser.State {
    
   background;
   message;
    init(message){
        this.message = message;
    }
    create() {
        this.background = this.game.add.sprite(0, 0, 'backyard');
        this.background.inputEnabled = true;

        this.background.events.onInputDown.add(function(){
            //this.state.start('Add')
            this.state.start('MathGame')
            
            //this.state.start('Game');
            console.log('game');
        }, this)

       var style = {font:'35px Arial', fill: '#fff'};
       this.game.add.text(30, this.game.world.centerY + 200, 'Touch To Start', style);
    
        if(this.message){
            this.game.add.text(60, this.game.world.centerY -200, this.message, style);
        }
    }

    

}