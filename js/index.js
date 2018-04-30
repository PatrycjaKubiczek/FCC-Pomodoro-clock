var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//imports don't work in codepen
var Component = ng.core.Component;
var bootstrap = ng.platform.browser.bootstrap;
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.initialMins = 25;
        this.mins = 25;
        this.secs = 0;
        this.isRunning = false;
        this.isZero = true;
        this.isBreak = false;
        this.initialBreak = 5;
        this.breakMins = 5;
        this.breakSecs = 0;
    }
    // dashoffset = 0;
    // radius = 50;
    // dashoffestUpdate = 2 * Math.PI * 100;
    // heightVal = 100;
    // heightPX = heightVal +'px';
    AppComponent.prototype.run = function () {
        this.isRunning = true;
        this.counter();
        this.isBreak = false;
    };
    AppComponent.prototype.reset = function () {
        this.mins = 25;
        this.secs = 0;
        this.isRunning = false;
    };
    AppComponent.prototype.pause = function () {
        this.isRunning = false;
    };
    AppComponent.prototype.increase = function () {
        if (!this.isRunning)
            this.mins += 1;
    };
    AppComponent.prototype.decrease = function () {
        if (!this.isRunning && this.mins > 0)
            this.mins -= 1;
    };
    AppComponent.prototype.increaseBreak = function () {
        if (!this.isRunning)
            this.breakMins += 1;
    };
    AppComponent.prototype.decreaseBreak = function () {
        if (!this.isRunning && this.breakMins > 0)
            this.breakMins -= 1;
    };
    AppComponent.prototype.breakTime = function () {
        this.counterBreak();
        console.log("time for break");
    };
    AppComponent.prototype.counter = function () {
        var _this = this;
        setTimeout(function () {
            if ((_this.mins || _this.secs) && _this.isRunning) {
                if (_this.secs === 0) {
                    _this.secs = 59;
                    _this.mins -= 1;
                }
                else {
                    _this.secs -= 1;
                    // this.dashoffestUpdate--;
                }
                _this.counter();
            }
            ;
            if (_this.mins == 0 && _this.secs == 0) {
                _this.breakTime();
                _this.isRunning = false;
                _this.isBreak = true;
                _this.reset();
            }
            ;
        }, 1000);
    };
    AppComponent.prototype.counterBreak = function () {
        var _this = this;
        setTimeout(function () {
            if ((_this.breakMins || _this.breakSecs) && _this.isBreak) {
                if (_this.breakSecs === 0) {
                    _this.breakSecs = 59;
                    _this.breakMins -= 1;
                }
                else {
                    _this.breakSecs -= 1;
                    // this.dashoffestUpdate--;
                }
                _this.counterBreak();
            }
            ;
            if (_this.breakMins == 0 && _this.breakSecs == 0) {
                _this.counter();
                _this.isRunning = true;
                _this.isBreak = false;
                _this.reset();
            }
            ;
        }, 1000);
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            template: "\n <header> \n<h4>Pomodoro timer (angular2)</h4>\n</header>\n  <svg class=\"circle\">\n    <circle r=\"50\" cx=\"200\" cy=\"200\" [style.strokeDashoffset]=\"dashoffestUpdate\"></circle>\n  </svg>\n  \n          <h2 class=\"timer\" *ngIf=\"!isBreak\">\n{{mins}} : {{secs < 10 ? \"0\" + secs  : secs}}\n</h2>\n\n<div *ngIf=\"isBreak\">\n<h2>time for break!</h2>\n{{breakMins}} : {{breakSecs < 10 ? \"0\" + breakSecs  : breakSecs}}</div>\n <button id=\"go\" *ngIf=\"!isRunning\" (click)=\"run()\"><i class=\"fas fa-play\"></i>\n</button>\n\n<button id=\"pause\" *ngIf=\"isRunning\" (click)=\"pause()\"><i class=\"fas fa-pause\"></i>\n</button>\n\n<button id=\"reset\" *ngIf=\"isRunning\" (click)=\"reset()\"><i class=\"fas fa-undo-alt\"></i>\n\n</button>\n<div class=\"options\">\n<p>\nchange length of session time: \n<button class=\"change\" (click)=\"decrease()\">-</button>\n  {{mins}} \n<button class=\"change\" (click)=\"increase()\">+</button> \n</p>\n<p>\nchange length of break time: \n<button class=\"change\" (click)=\"decreaseBreak()\">-</button>\n {{breakMins}}   <button class=\"change\" (click)=\"increaseBreak()\">+</button>\n\n</p>\n</div>\n"
        })
    ], AppComponent);
    return AppComponent;
}());
bootstrap(AppComponent);