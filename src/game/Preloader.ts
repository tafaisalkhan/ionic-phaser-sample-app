
import {MainMenu} from './MainMenu';
export class Preloader extends Phaser.State {
    loaderText: Phaser.Text;

    preload() {
        
        this.loaderText = this.game.add.text(this.world.centerX, 200, "Loading...",
            { font: "18px Arial", fill: "#A9A91111", align: "center" });
        this.loaderText.anchor.setTo(0.5);

        this.load.image('titlepage', './assets/titlePage.png');
        this.load.image('logo', './assets/gameLogo.png');
       // this.load.audio('click', './assets/click.ogg', true);

        this.load.atlasJSONHash('level01-sprites', './assets/dude.png', './assets/baddie.json');
    }

    create() {
        var tween = this.add.tween(this.loaderText).to({ alpha: 0 }, 2000,
            Phaser.Easing.Linear.None, true);
        tween.onComplete.add(this.startMainMenu, this);
    }

    startMainMenu() {
        this.game.state.start('MainMenu', true, false);
    }

}
       