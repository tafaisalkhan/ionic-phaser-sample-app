webpackJsonp([0],{

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_gamesState__ = __webpack_require__(261);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    /**
     * Creates an instance of HomePage.
     * @param {NavController} navCtrl
     * @memberof HomePage
     */
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.gameInstance1 = new __WEBPACK_IMPORTED_MODULE_2__game_gamesState__["a" /* GameState */]();
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/fkhan/Desktop/myPhaserGame/src/pages/home/home.html"*/'\n<ion-content>\n  <div id="game"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/fkhan/Desktop/myPhaserGame/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(212);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_game_service_game_service__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_7__providers_game_service_game_service__["a" /* GameServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/fkhan/Desktop/myPhaserGame/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/fkhan/Desktop/myPhaserGame/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pixi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_p2__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_p2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_p2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_phaser_ce__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_phaser_ce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_phaser_ce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_game__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__preloader__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__boot__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__adding__ = __webpack_require__(273);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// import pixi, p2 and phaser ce








/**
 * Main entry game class
 * @export
 * @class Game
 * @extends {Phaser.Game}
 */
var GameState = (function (_super) {
    __extends(GameState, _super);
    /**
     * Creates an instance of Game.
     * @memberof Game
     */
    function GameState() {
        var _this = _super.call(this, 360, 640, __WEBPACK_IMPORTED_MODULE_2_phaser_ce__["AUTO"], 'game', null) || this;
        _this.state.add('MyGame', __WEBPACK_IMPORTED_MODULE_3__my_game__["a" /* MyGame */], false);
        _this.state.add('Preloader', __WEBPACK_IMPORTED_MODULE_4__preloader__["a" /* Preloader */], false);
        _this.state.add('Boot', __WEBPACK_IMPORTED_MODULE_5__boot__["a" /* Boot */], false);
        _this.state.add('Home', __WEBPACK_IMPORTED_MODULE_6__home__["a" /* Home */], false);
        _this.state.add('MathGame', __WEBPACK_IMPORTED_MODULE_6__home__["a" /* Home */], false);
        _this.state.add('Add', __WEBPACK_IMPORTED_MODULE_7__adding__["a" /* Adding */], false);
        _this.state.start('Boot');
        return _this;
    }
    return GameState;
}(__WEBPACK_IMPORTED_MODULE_2_phaser_ce__["Game"]));

//# sourceMappingURL=gamesState.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyGame; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyGame = (function (_super) {
    __extends(MyGame, _super);
    function MyGame(navParams) {
        var _this = _super.call(this) || this;
        _this.navParams = navParams;
        _this.uiBlocked = false;
        _this.buttons = [];
        _this.fontColors = [0xff0000, 0x0000ff];
        return _this;
    }
    MyGame.prototype.init = function () {
        //this.socket = io('http://localhost:3000', this.options);
        /* this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
 
         this.scale.pageAlignHorizontally = true;
         this.scale.pageAlignVertically = true;
         */
    };
    MyGame.prototype.create = function () {
        this.background = this.game.add.sprite(0, 0, 'backyard');
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
        var style = { font: '290x Arial', fill: 'bule' };
        //this.game.add.text(10,20, 'Question No:', style);
        //this.game.add.text(140,20, 'Timer:', style);
        //this.game.add.text(280,20, 'Points:', style);
        //this.healthText  = this.game.add.text(80,20, '' , style);
        //this.funText = this.game.add.text(185,20, '' , style);
        this.game.add.bitmapText(10, 20, 'stack', 'Q.No:', 20);
        this.game.add.bitmapText(140, 20, 'stack', 'Timer:', 20);
        this.game.add.bitmapText(280, 20, 'stack', 'Points:', 20);
        this.questionCount = this.game.add.bitmapText(25, 40, 'desyrel', '23', 20);
        this.questionCount.tint = this.fontColors[1];
        this.timerCount = this.game.add.bitmapText(155, 40, 'desyrel', '100', 20);
        this.timerCount.tint = this.fontColors[0];
        this.pointsCount = this.game.add.bitmapText(310, 40, 'desyrel', '0', 20);
        this.pointsCount.tint = this.fontColors[1];
        this.refreshStatus();
        this.other = this.game.add.bitmapText(100, 100, 'stack', 'Addition', 40);
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
        this.other = this.game.add.bitmapText(150, 350, 'stack', 'Select Correct Answer', 20);
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
    };
    MyGame.prototype.resultSelected = function (sprite, event) {
        console.log('result selected');
        //sprite.scale.set(2, 2);
        this.game.add.tween(sprite.scale).to({ x: 1.5, y: 1.5 }, 1000, Phaser.Easing.Bounce.Out, true);
        var userOptionSelected = this.game.add.sprite(sprite.x, sprite.y, 'wrong');
        userOptionSelected.anchor.setTo(0.5);
        userOptionSelected.scale.setTo(2, 2);
    };
    MyGame.prototype.onDragStart = function (sprite, event) {
        sprite.alpha = 0.4;
        sprite.y = sprite.y - 30;
        sprite.scale.set(2, 2);
        this.selcedNumber = sprite;
        //copy sprite
        this.secNumber = this.game.add.sprite(sprite.x, sprite.y + 30, sprite.generateTexture());
        this.secNumber.customParams = { value: sprite.customParams.value };
        this.secNumber.inputEnabled = true;
        this.secNumber.input.enableDrag();
        this.secNumber.events.onDragStart.add(this.onDragStart, this);
        this.secNumber.events.onDragStop.add(this.onDragStop, this);
        this.secNumber.events.onInputDown.add(this.numberClick, this);
        this.secNumber.anchor.setTo(0.5);
    };
    MyGame.prototype.onDragStop = function (sprite, event) {
        sprite.kill();
        this.updateTrue = false;
        this.game.time.events.add(500, this.resetBtn, this);
        this.selcedNumber = undefined;
    };
    MyGame.prototype.actionRefresh = function () {
        this.firstNo.kill();
        //this.secNo.kill();
        //this.firstNo.text = "?"
        this.firstNo = this.game.add.bitmapText(50, 180, 'desyrel', '?', 40);
        this.firstNo.tint = this.fontColors[1];
        this.secNo = this.game.add.bitmapText(170, 180, 'desyrel', '?', 40);
        this.secNo.tint = this.fontColors[1];
    };
    MyGame.prototype.actionOnClick = function () {
    };
    MyGame.prototype.rotateDude = function (sprite, event) {
        if (!this.uiBlocked) {
            console.log('rotating..;');
            this.uiBlocked = true;
            this.clearSelection();
            sprite.alpha = 0.4;
            var dudeRotation = this.game.add.tween(this.dude);
            dudeRotation.to({ angle: '+720' }, 1000);
            dudeRotation.onComplete.add(function () {
                this.uiBlocked = false;
                sprite.a = 1;
                this.dude.customParams.health += 10;
                this.refreshStatus();
                this.clearSelection();
                console.log(this.dude);
            }, this);
            dudeRotation.start();
        }
    };
    MyGame.prototype.pickItem = function (sprite, event) {
        console.log('pick item');
        if (!this.uiBlocked) {
            this.uiBlocked = false;
            this.clearSelection();
            sprite.alpha = 0.4;
            this.selectedItem = sprite;
        }
    };
    MyGame.prototype.numberClick = function (sprite, events) {
        console.log(sprite._text);
        ;
    };
    MyGame.prototype.resetBtn = function () {
        //this.selcedNumber.scale.set(1);
        //this.selcedNumber.alpha = 1;
    };
    MyGame.prototype.placeItem = function (sprite, event) {
        if (this.selectedItem && !this.uiBlocked) {
            var x = event.position.x;
            var y = event.position.y;
            //var newItem  = this.game.add.sprite(x,y, this.selectedItem.key);
            //newItem.anchor.setTo(0.5);
            this.newItem = this.game.add.sprite(x, y, this.selectedItem.key);
            this.newItem.anchor.setTo(0.5);
            this.newItem.customParams = this.selectedItem.customParams;
            this.uiBlocked = true;
            var dudeMovement = this.game.add.tween(this.dude);
            dudeMovement.to({ x: x, y: y }, 700);
            dudeMovement.onComplete.add(function () {
                this.uiBlocked = false;
                this.clearSelection();
                this.newItem.kill();
                //this.socket.disconnect();
                this.dude.animations.play('funny');
                var stat;
                for (stat in this.newItem.customParams) {
                    if (this.newItem.customParams.hasOwnProperty(stat)) {
                        console.log(stat);
                        this.dude.customParams[stat] += this.newItem.customParams[stat];
                    }
                }
                this.refreshStatus();
            }, this);
            dudeMovement.start();
        }
    };
    MyGame.prototype.clearSelection = function () {
        this.buttons.forEach(function (element, index) {
            element.alpha = 1;
        });
        this.selectedItem = null;
    };
    MyGame.prototype.refreshStatus = function () {
        // this.healthText.text = this.dude.customParams.health;
        // this.funText.text = this.dude.customParams.fun;
    };
    MyGame.prototype.reduceProperties = function () {
        //this.dude.customParams.health -= 10;
        //this.dude.customParams.fun -= 15;
        this.refreshStatus();
    };
    MyGame.prototype.update = function () {
        //if(this.dude.customParams.health <= 0 || this.dude.customParams.fun <= 0){
        //   this.dude.frame = 5;
        //  this.uiBlocked = true;
        //this.game.time.events.add(2000, this.gameOver, this);
        // }
        if (this.selcedNumber != undefined && !this.updateTrue) {
            if (this.checkOverlap(this.selcedNumber, this.firstNo)) {
                try {
                    if (isNaN(parseInt(this.firstNo.text))) {
                        this.firstNo.text = this.selcedNumber.customParams.value;
                    }
                    else {
                        var tmp = parseInt(this.firstNo.text);
                        tmp = tmp + this.selcedNumber.customParams.value;
                        this.firstNo.text = tmp;
                    }
                }
                catch (e) {
                }
                console.log('Drag the sprites. Overlapping: true');
                this.updateTrue = true;
            }
            else if (this.checkOverlap(this.selcedNumber, this.secNo)) {
                try {
                    if (isNaN(parseInt(this.secNo.text))) {
                        this.secNo.text = this.selcedNumber.customParams.value;
                    }
                    else {
                        var tmp = parseInt(this.secNo.text);
                        tmp = tmp + this.selcedNumber.customParams.value;
                        this.secNo.text = tmp;
                    }
                }
                catch (e) {
                }
                console.log('Drag the sprites. Overlapping: false');
                this.updateTrue = true;
            }
        }
    };
    MyGame.prototype.gameOver = function () {
        this.state.start('Home', true, false, 'GAME OVER');
        //this.game.state.restart();
    };
    MyGame.prototype.checkOverlap = function (spriteA, spriteB) {
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
        return Phaser.Rectangle.intersects(boundsA, boundsB);
    };
    return MyGame;
}(Phaser.State));

//# sourceMappingURL=my-game.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Preloader; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Preloader = (function (_super) {
    __extends(Preloader, _super);
    function Preloader(navParams) {
        var _this = _super.call(this) || this;
        _this.navParams = navParams;
        return _this;
    }
    Preloader.prototype.preload = function () {
        this.logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        this.logo.anchor.setTo(0.5);
        this.preLoadBar = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
        this.preLoadBar.anchor.set(0.5);
        this.load.setPreloadSprite(this.preLoadBar);
        this.load.spritesheet('refresh', 'assets/images/refresh_button_sprite_sheet.png', 193, 71);
        this.load.spritesheet('ok', 'assets/images/ok_button_sprite_sheet.png', 193, 71);
        this.load.image('backyard', 'assets/images/sky.png');
        this.load.image('diamond', 'assets/images/diamond.png');
        this.load.image('star', 'assets/images/star.png');
        this.load.image('firstAid', 'assets/images/firstaid.png');
        this.load.image('classBoard', 'assets/images/classroom-board.png');
        this.load.image('line', 'assets/images/line.png');
        this.load.image('selectBar', 'assets/images/selectbar.png');
        this.load.image('no1', 'assets/images/no1.png');
        this.load.image('ans', 'assets/images/ans.png');
        this.load.image('plus', 'assets/images/plus.png');
        this.load.image('equal', 'assets/images/equal.png');
        this.load.image('sub', 'assets/images/sub.png');
        this.load.image('divide', 'assets/images/divide.png');
        this.load.image('multi', 'assets/images/multi.png');
        this.load.image('wrong', 'assets/images/wrong.png');
        this.load.image('correct', 'assets/images/correct.png');
        this.load.spritesheet('dude', 'assets/images/dude.png', 31, 45, 9, 1, 1);
        this.game.load.bitmapFont('desyrel', 'assets/fonts/bitmapFonts/desyrel.png', 'assets/fonts/bitmapFonts/desyrel.xml');
        this.game.load.bitmapFont('desyrel-pink', 'assets/fonts/bitmapFonts/desyrel-pink.png', 'assets/fonts/bitmapFonts/desyrel-pink.xml');
        this.game.load.bitmapFont('stack', 'assets/fonts/bitmapFonts/shortStack.png', 'assets/fonts/bitmapFonts/shortStack.xml');
    };
    Preloader.prototype.create = function () {
        this.game.state.start('Home');
    };
    Preloader.prototype.startMainMenu = function () {
    };
    return Preloader;
}(Phaser.State));

//# sourceMappingURL=preloader.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Boot; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Boot = (function (_super) {
    __extends(Boot, _super);
    function Boot(navParams) {
        var _this = _super.call(this) || this;
        _this.navParams = navParams;
        return _this;
    }
    Boot.prototype.init = function () {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    };
    Boot.prototype.preload = function () {
        this.game.load.image('preloadbar', 'assets/images/loader.png');
        this.game.load.image('logo', 'assets/images/logo.png');
    };
    Boot.prototype.create = function () {
        this.game.stage.backgroundColor = '#fff';
        this.state.start('Preloader');
    };
    return Boot;
}(Phaser.State));

//# sourceMappingURL=boot.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.init = function (message) {
        this.message = message;
    };
    Home.prototype.create = function () {
        this.background = this.game.add.sprite(0, 0, 'backyard');
        this.background.inputEnabled = true;
        this.background.events.onInputDown.add(function () {
            //this.state.start('Add')
            this.state.start('MathGame');
            //this.state.start('Game');
            console.log('game');
        }, this);
        var style = { font: '35px Arial', fill: '#fff' };
        this.game.add.text(30, this.game.world.centerY + 200, 'Touch To Start', style);
        if (this.message) {
            this.game.add.text(60, this.game.world.centerY - 200, this.message, style);
        }
    };
    return Home;
}(Phaser.State));

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Adding; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Adding = (function (_super) {
    __extends(Adding, _super);
    function Adding(navParams) {
        var _this = _super.call(this) || this;
        _this.navParams = navParams;
        _this.numberSprite = [];
        _this.index = 0;
        return _this;
    }
    Adding.prototype.init = function () {
    };
    Adding.prototype.create = function () {
        var twoNumber = [
            {
                x: 180, y: 180,
            },
            {
                x: 180, y: 240,
            },
            {
                x: 140, y: 240,
            }
        ];
        debugger;
        this.navParams;
        var style = { font: '190x Arial', fill: 'white', size: 120 };
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
        this.numberGroup = this.game.add.group();
        var text = this.game.add.text(220, 40, "Adding", style);
        var text = this.game.add.text(140, 80, "34", style);
        var text = this.game.add.text(220, 80, "34", style);
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
    };
    Adding.prototype.startAnimation = function () {
        console.log("time completed" + this.index);
        debugger;
        if (this.numberSprite.length > this.index) {
            this.numberSprite[this.index].alpha = 0.4;
            this.numberSprite[this.index].scale.setTo(1.5, 1.5);
            this.index++;
            this.alpahItem();
        }
        else {
            var bounce = this.game.add.tween(this.numberSprite[0]);
            bounce.to({ y: this.numberSprite[0].y + 130 }, 1000, Phaser.Easing.Bounce.In);
            bounce.onComplete.add(this.startBounceTween, this);
            bounce.start();
        }
    };
    Adding.prototype.startBounceTween = function () {
        var bounce = this.game.add.tween(this.numberSprite[1]);
        this.tmpOperator = this.game.add.bitmapText(155, 340, 'desyrel-pink', "+", 60);
        bounce.to({ x: this.numberSprite[0].x - 70, y: this.numberSprite[0].y }, 1000, Phaser.Easing.Bounce.In);
        bounce.onComplete.add(this.addNumber, this);
        bounce.start();
    };
    Adding.prototype.update = function () {
        //this.line.rotate(0.05);
    };
    Adding.prototype.addNumber = function () {
        console.log('calculate');
        this.numberSprite[0].kill();
        this.numberSprite[1].kill();
        this.tmpOperator.kill();
        var result = this.game.add.bitmapText(170, 320, 'desyrel-pink', "2", 80);
        result.alpha = 0;
        //this.game.add.tween(result).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 1, 1, true);
        this.game.add.tween(result).to({ alpha: 1 }, 1000, Phaser.Easing.Bounce.Out, true);
    };
    Adding.prototype.gameOver = function () {
    };
    Adding.prototype.alpahItem = function () {
        this.game.time.events.repeat(Phaser.Timer.SECOND * 2, 1, this.startAnimation, this);
    };
    Adding.prototype.checkOverlap = function (spriteA, spriteB) {
    };
    Adding.prototype.render = function () {
        // this.game.debug.geom(this.line);
        //   this.game.debug.lineInfo(this.line, 32, 32);
    };
    return Adding;
}(Phaser.State));

//# sourceMappingURL=adding.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the GameServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var GameServiceProvider = (function () {
    function GameServiceProvider(http) {
        this.http = http;
        console.log('Hello GameServiceProvider Provider');
    }
    return GameServiceProvider;
}());
GameServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], GameServiceProvider);

//# sourceMappingURL=game-service.js.map

/***/ })

},[193]);
//# sourceMappingURL=main.js.map