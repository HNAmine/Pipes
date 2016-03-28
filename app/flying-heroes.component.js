System.register(['angular2/core', './flying-heroes.pipe', './heroes'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, flying_heroes_pipe_1, heroes_1;
    var FlyingHeroesComponent, FlyingHeroesImpureComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (flying_heroes_pipe_1_1) {
                flying_heroes_pipe_1 = flying_heroes_pipe_1_1;
            },
            function (heroes_1_1) {
                heroes_1 = heroes_1_1;
            }],
        execute: function() {
            FlyingHeroesComponent = (function () {
                function FlyingHeroesComponent() {
                    this.heroes = [];
                    this.canFly = true;
                    this.mutate = true;
                    this.title = 'Flying Heroes (pure pipe)';
                    this.reset();
                }
                FlyingHeroesComponent.prototype.addHero = function (name) {
                    name = name.trim();
                    if (!name) {
                        return;
                    }
                    var hero = { name: name, canFly: this.canFly };
                    if (this.mutate) {
                        this.heroes.push(hero);
                    }
                    else {
                        this.heroes = this.heroes.concat(hero);
                    }
                };
                FlyingHeroesComponent.prototype.reset = function () { this.heroes = heroes_1.HEROES.slice(); };
                FlyingHeroesComponent = __decorate([
                    core_1.Component({
                        selector: 'flying-heroes',
                        templateUrl: 'app/flying-heroes.component.html',
                        styles: ['#flyers, #all {font-style: italic}'],
                        pipes: [flying_heroes_pipe_1.FlyingHeroesPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FlyingHeroesComponent);
                return FlyingHeroesComponent;
            }());
            exports_1("FlyingHeroesComponent", FlyingHeroesComponent);
            FlyingHeroesImpureComponent = (function (_super) {
                __extends(FlyingHeroesImpureComponent, _super);
                function FlyingHeroesImpureComponent() {
                    _super.apply(this, arguments);
                    this.title = 'Flying Heroes (impure pipe)';
                }
                FlyingHeroesImpureComponent = __decorate([
                    core_1.Component({
                        selector: 'flying-heroes-impure',
                        templateUrl: 'app/flying-heroes.component.html',
                        styles: ['.flyers, .all {font-style: italic}'],
                        pipes: [flying_heroes_pipe_1.FlyingHeroesImpurePipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FlyingHeroesImpureComponent);
                return FlyingHeroesImpureComponent;
            }(FlyingHeroesComponent));
            exports_1("FlyingHeroesImpureComponent", FlyingHeroesImpureComponent);
        }
    }
});
//# sourceMappingURL=flying-heroes.component.js.map