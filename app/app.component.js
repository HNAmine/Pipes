System.register(['angular2/core', './exponential-strength.pipe', './flying-heroes.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, exponential_strength_pipe_1, flying_heroes_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (exponential_strength_pipe_1_1) {
                exponential_strength_pipe_1 = exponential_strength_pipe_1_1;
            },
            function (flying_heroes_component_1_1) {
                flying_heroes_component_1 = flying_heroes_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.birthday = new Date(1993, 9, 9);
                    this.a = 0.259;
                    this.b = 1.3495;
                    this.toggle = true;
                    this.power = 5;
                    this.factor = 1;
                }
                Object.defineProperty(AppComponent.prototype, "format", {
                    get: function () { return this.toggle ? 'medium' : 'fullDate'; },
                    enumerable: true,
                    configurable: true
                });
                AppComponent.prototype.toggleFormat = function () { this.toggle = !this.toggle; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <p>The hero's birthday is {{ birthday | date:format | uppercase}}</p>\n    <button (click)=\"toggleFormat()\">Toggle Format</button>\n    <p>A: {{a | currency:'USD':false}}</p>\n    <p>B: {{b | currency:'USD':true:'4.2-2'}}</p>\n    <hr>\n    <h2>Power Booster</h2>\n    <p>\n      Super power boost: {{2 | exponentialStrength:4}}\n    </p>\n    <hr>\n    <h2>Power Boost Calculator</h2>\n    <div>Normal power: <input [(ngModel)]=\"power\"></div>\n    <div>Boost factor: <input [(ngModel)]=\"factor\"></div>\n    <p>\n       Super Hero Power: {{power | exponentialStrength: factor}}\n    </p>\n    <hr>\n    <flying-heroes></flying-heroes>\n    <flying-heroes-impure></flying-heroes-impure>\n    ", pipes: [exponential_strength_pipe_1.ExponentialStrengthPipe],
                        directives: [flying_heroes_component_1.FlyingHeroesComponent, flying_heroes_component_1.FlyingHeroesImpureComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map