define("project-app/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ckH425ob", "block": "{\"symbols\":[],\"statements\":[[2,\" Info when sign-in \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"jumbotron\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n    \"],[6,\"h1\"],[7],[0,\"Welcome!\"],[8],[0,\"\\n\\n\\n    \"],[6,\"div\"],[9,\"class\",\"page-header\"],[7],[0,\"\\n      \"],[6,\"h1\"],[7],[0,\"You must be signed in to use this app\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"list-group\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"sign-up\"],[[\"class\"],[\"list-group-item\"]],{\"statements\":[[0,\"        Sign Up\\n\"]],\"parameters\":[]},null],[4,\"link-to\",[\"sign-in\"],[[\"class\"],[\"list-group-item\"]],{\"statements\":[[0,\"        Sign In\\n\"]],\"parameters\":[]},null],[0,\"      \"],[8],[0,\"\\n\\n\"],[4,\"if\",[[20,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"        Logged in as \"],[1,[20,[\"session\",\"currentUser\",\"displayName\"]],false],[0,\"\\n        \"],[6,\"button\"],[3,\"action\",[[19,0,[]],\"signOut\"]],[7],[0,\"Sign out\"],[8],[0,\"\\n        \"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[6,\"button\"],[3,\"action\",[[19,0,[]],\"signIn\",\"twitter\"]],[7],[0,\"Sign in with Twitter\"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n\\n\\n  \"],[2,\" footer \"],[0,\"\\n  \"],[6,\"footer\"],[7],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"Group Members: Aishwarya Iyer, Joshua Marvel, Tevisophea Heng, Kimberly Nguyen, Briana Hernandez\"],[8],[0,\"\\n\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[2,\" /container \"],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "project-app/templates/index.hbs" } });
});