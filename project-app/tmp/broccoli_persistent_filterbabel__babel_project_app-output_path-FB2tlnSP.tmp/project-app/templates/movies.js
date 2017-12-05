define("project-app/templates/movies", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "lQOIvYQr", "block": "{\"symbols\":[\"movie\"],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\"],[6,\"h1\"],[7],[0,\"Movies\"],[8],[0,\"\\n\"],[4,\"each\",[[20,[\"model\"]]],null,{\"statements\":[[0,\"\\t\"],[6,\"div\"],[9,\"class\",\"well\"],[7],[0,\"\\n\\t\\t\"],[6,\"h4\"],[7],[4,\"link-to\",[\"movies.edit\",[19,1,[\"id\"]]],null,{\"statements\":[[1,[19,1,[\"title\"]],false]],\"parameters\":[]},null],[8],[0,\"\\n\\t\\t\"],[6,\"p\"],[7],[0,\"Rating: \"],[1,[19,1,[\"rating\"]],false],[8],[0,\"\\n\\t\\t\"],[6,\"p\"],[7],[0,\"Description: \"],[1,[19,1,[\"description\"]],false],[8],[0,\"\\n\\t\\t\"],[6,\"button\"],[9,\"class\",\"btn btn-danger\"],[3,\"action\",[[19,0,[]],\"deleteMovie\",[19,1,[\"id\"]]]],[7],[0,\"Delete\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "project-app/templates/movies.hbs" } });
});