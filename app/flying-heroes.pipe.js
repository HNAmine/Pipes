System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var FlyingHeroesPipe, FlyingHeroesImpurePipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FlyingHeroesPipe = (function () {
                function FlyingHeroesPipe() {
                }
                FlyingHeroesPipe.prototype.transform = function (allHeroes) {
                    return allHeroes.filter(function (hero) { return hero.canFly; });
                };
                FlyingHeroesPipe = __decorate([
                    core_1.Pipe({ name: 'flyingHeroes' }), 
                    __metadata('design:paramtypes', [])
                ], FlyingHeroesPipe);
                return FlyingHeroesPipe;
            }());
            exports_1("FlyingHeroesPipe", FlyingHeroesPipe);
            FlyingHeroesImpurePipe = (function (_super) {
                __extends(FlyingHeroesImpurePipe, _super);
                function FlyingHeroesImpurePipe() {
                    _super.apply(this, arguments);
                }
                FlyingHeroesImpurePipe = __decorate([
                    core_1.Pipe({
                        name: 'flyingHeroes',
                        pure: false
                    }), 
                    __metadata('design:paramtypes', [])
                ], FlyingHeroesImpurePipe);
                return FlyingHeroesImpurePipe;
            }(FlyingHeroesPipe));
            exports_1("FlyingHeroesImpurePipe", FlyingHeroesImpurePipe);
        }
    }
});
//# sourceMappingURL=flying-heroes.pipe.js.map