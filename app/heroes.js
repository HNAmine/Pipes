System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HEROES;
    return {
        setters:[],
        execute: function() {
            exports_1("HEROES", HEROES = [
                { "name": "Windstorm", "canFly": true },
                { "name": "Bombasto", "canFly": false },
                { "name": "Magneto", "canFly": false },
                { "name": "Tornado", "canFly": true }
            ]);
        }
    }
});
//# sourceMappingURL=heroes.js.map