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

/***/ 147:
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
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 191:
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

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(211);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(191);
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
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(191);
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
        return _this;
    }
    MyGame.prototype.init = function () {
        /* this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
 
         this.scale.pageAlignHorizontally = true;
         this.scale.pageAlignVertically = true;
         */
    };
    MyGame.prototype.create = function () {
        this.background = this.game.add.sprite(0, 0, 'backyard');
        this.background.inputEnabled = true;
        this.background.events.onInputDown.add(this.placeItem, this);
        this.dude = this.game.add.sprite(100, 400, 'dude');
        this.dude.customParams = { health: 100, fun: 100 };
        this.dude.animations.add('funny', [1, 2, 3, 2, 1], 7, false);
        this.star = this.game.add.sprite(72, 570, 'star');
        this.star.anchor.setTo(0.5);
        this.star.customParams = { healt: 20 };
        this.star.inputEnabled = true;
        this.star.events.onInputDown.add(this.pickItem, this);
        //custome properties
        this.star.customParams = { healt: 100, fun: 100 };
        //draggable dude
        this.dude.inputEnabled = true;
        this.dude.input.enableDrag();
        this.diamond = this.game.add.sprite(288, 470, 'diamond');
        this.diamond.anchor.setTo(0.5);
        this.diamond.customParams = { health: -10, fun: 20 };
        this.diamond.inputEnabled = true;
        this.diamond.events.onInputDown.add(this.pickItem, this);
        this.firstAid = this.game.add.sprite(288, 570, 'firstAid');
        this.firstAid.anchor.setTo(0.5);
        this.firstAid.customParams = { health: 10, fun: -10 };
        this.firstAid.inputEnabled = true;
        this.firstAid.events.onInputDown.add(this.rotateDude, this);
        this.buttons = [this.star, this.diamond, this.firstAid];
        this.selectedItem = null;
        this.uiBlocked = false;
        var style = { font: '290x Arial', fill: '#fff' };
        this.game.add.text(10, 20, 'Health:', style);
        this.game.add.text(140, 20, 'Fun:', style);
        this.healthText = this.game.add.text(80, 20, '', style);
        this.funText = this.game.add.text(185, 20, '', style);
        this.refreshStatus();
        this.statsDecreaser = this.game.time.events.loop(Phaser.Timer.SECOND * 5, this.reduceProperties, this);
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
        this.healthText.text = this.dude.customParams.health;
        this.funText.text = this.dude.customParams.fun;
    };
    MyGame.prototype.reduceProperties = function () {
        this.dude.customParams.health -= 10;
        this.dude.customParams.fun -= 15;
        this.refreshStatus();
    };
    MyGame.prototype.update = function () {
        if (this.dude.customParams.health <= 0 || this.dude.customParams.fun <= 0) {
            this.dude.frame = 5;
            this.uiBlocked = true;
            this.game.time.events.add(2000, this.gameOver, this);
        }
    };
    MyGame.prototype.gameOver = function () {
        this.state.start('Home', true, false, 'GAME OVER');
        //this.game.state.restart();
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
        this.load.image('backyard', 'assets/images/sky.png');
        this.load.image('diamond', 'assets/images/diamond.png');
        this.load.image('star', 'assets/images/star.png');
        this.load.image('firstAid', 'assets/images/firstaid.png');
        this.load.spritesheet('dude', 'assets/images/dude.png', 31, 45, 9, 1, 1);
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
            this.state.start('MyGame');
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

/***/ })

},[192]);
//# sourceMappingURL=main.js.map