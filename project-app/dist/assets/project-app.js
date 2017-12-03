"use strict";



define('project-app/adapters/application', ['exports', 'emberfire/adapters/firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var inject = Ember.inject;
  exports.default = _firebase.default.extend({
    firebase: inject.service()
  });
});
define('project-app/app', ['exports', 'project-app/resolver', 'ember-load-initializers', 'project-app/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Application = Ember.Application;


  var App = Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('project-app/components/torii-iframe-placeholder', ['exports', 'torii/components/torii-iframe-placeholder'], function (exports, _toriiIframePlaceholder) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _toriiIframePlaceholder.default;
});
define('project-app/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('project-app/controllers/messages', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    sortProperties: ['timestamp'],
    sortAscending: false, // sorts post by timestamp
    actions: {
      addMessage: function addMessage() {

        var name = this.get('name');
        var body = this.get('body');
        var newMessage = this.store.createRecord('messages', {
          name: name,
          body: body,
          timestamp: new Date().getTime()

        });
        //save to database
        newMessage.save();

        //clear form
        this.setProperties({
          name: '',
          body: '',
          timestamp: ''
        });
      }
    }

  });
});
define('project-app/controllers/pictures', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Controller = Ember.Controller;
  exports.default = Ember.Controller.extend({
    actions: {
      deletePicture: function deletePicture(picture) {
        picture.deleteRecord();
        picture.save();
      }
    }
  });
});
define('project-app/controllers/pictures/new', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    actions: {
      publishPictures: function publishPictures() {
        var newPicture = this.store.createRecord('picture', {
          title: this.get('title'),
          description: this.get('desc')
        });
        newPicture.save();
        this.transitionTo('pictures');
      }
    }
  });
});
define('project-app/controllers/sign-in', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    actions: {
      signIn: function signIn() {
        var controller = this.get('controller');
        //var email = controller.get('email');
        //var password = controller.get('password');
        this.get('session').open('firebase', {
          provider: 'password',
          email: this.get('email') || '',
          password: this.get('password') || ''
        }).then(function () {
          this.transitionToRoute('application');
        }.bind(this));
      }
    }
  });
});
define('project-app/controllers/sign-up', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    firebaseApp: Ember.inject.service(),

    actions: {
      signUp: function signUp() {
        var _this = this;

        var auth = this.get('firebaseApp').auth();
        var controller = this;
        auth.createUserWithEmailAndPassword(this.get('email'), this.get('password')).then(function (userResponse) {
          var user = _this.store.createRecord('user', {
            id: userResponse.uid,
            email: userResponse.email
          });
          return user.save();
        });
      }
    }
  });
});
define('project-app/helpers/app-version', ['exports', 'project-app/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('project-app/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('project-app/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('project-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'project-app/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('project-app/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('project-app/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('project-app/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('project-app/initializers/emberfire', ['exports', 'emberfire/initializers/emberfire'], function (exports, _emberfire) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberfire.default;
});
define('project-app/initializers/export-application-global', ['exports', 'project-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('project-app/initializers/initialize-torii-callback', ['exports', 'project-app/config/environment', 'torii/redirect-handler'], function (exports, _environment, _redirectHandler) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'torii-callback',
    before: 'torii',
    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      if (_environment.default.torii && _environment.default.torii.disableRedirectInitializer) {
        return;
      }
      application.deferReadiness();
      _redirectHandler.default.handle(window).catch(function () {
        application.advanceReadiness();
      });
    }
  };
});
define('project-app/initializers/initialize-torii-session', ['exports', 'torii/bootstrap/session', 'torii/configuration'], function (exports, _session, _configuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'torii-session',
    after: 'torii',

    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      var configuration = (0, _configuration.getConfiguration)();
      if (!configuration.sessionServiceName) {
        return;
      }

      (0, _session.default)(application, configuration.sessionServiceName);

      var sessionFactoryName = 'service:' + configuration.sessionServiceName;
      application.inject('adapter', configuration.sessionServiceName, sessionFactoryName);
    }
  };
});
define('project-app/initializers/initialize-torii', ['exports', 'torii/bootstrap/torii', 'torii/configuration', 'project-app/config/environment'], function (exports, _torii, _configuration, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var initializer = {
    name: 'torii',
    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      (0, _configuration.configure)(_environment.default.torii || {});
      (0, _torii.default)(application);
      application.inject('route', 'torii', 'service:torii');
    }
  };

  exports.default = initializer;
});
define('project-app/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('project-app/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('project-app/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("project-app/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('project-app/instance-initializers/setup-routes', ['exports', 'torii/bootstrap/routing', 'torii/configuration', 'torii/compat/get-router-instance', 'torii/compat/get-router-lib', 'torii/router-dsl-ext'], function (exports, _routing, _configuration, _getRouterInstance, _getRouterLib) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'torii-setup-routes',
    initialize: function initialize(applicationInstance, registry) {
      var configuration = (0, _configuration.getConfiguration)();

      if (!configuration.sessionServiceName) {
        return;
      }

      var router = (0, _getRouterInstance.default)(applicationInstance);
      var setupRoutes = function setupRoutes() {
        var routerLib = (0, _getRouterLib.default)(router);
        var authenticatedRoutes = routerLib.authenticatedRoutes;
        var hasAuthenticatedRoutes = !Ember.isEmpty(authenticatedRoutes);
        if (hasAuthenticatedRoutes) {
          (0, _routing.default)(applicationInstance, authenticatedRoutes);
        }
        router.off('willTransition', setupRoutes);
      };
      router.on('willTransition', setupRoutes);
    }
  };
});
define('project-app/instance-initializers/walk-providers', ['exports', 'torii/lib/container-utils', 'torii/configuration'], function (exports, _containerUtils, _configuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'torii-walk-providers',
    initialize: function initialize(applicationInstance) {
      var configuration = (0, _configuration.getConfiguration)();
      // Walk all configured providers and eagerly instantiate
      // them. This gives providers with initialization side effects
      // like facebook-connect a chance to load up assets.
      for (var key in configuration.providers) {
        if (configuration.providers.hasOwnProperty(key)) {
          (0, _containerUtils.lookup)(applicationInstance, 'torii-provider:' + key);
        }
      }
    }
  };
});
define('project-app/models/messages', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        name: _emberData.default.attr('string'),
        body: _emberData.default.attr('string'),
        timestamp: _emberData.default.attr('number')

    });
});
define('project-app/models/picture', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    title: _emberData.default.attr(),
    description: _emberData.default.attr(),
    image: _emberData.default.attr()
  });
});
define('project-app/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    email: _emberData.default.attr(),
    password: _emberData.default.attr()
  });
});
define('project-app/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('project-app/router', ['exports', 'project-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var EmberRouter = Ember.Router;


  var Router = EmberRouter.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('about');
    this.route('messages');
    this.route('pictures', function () {
      this.route('new');
    });
    this.route('sign-up');
    this.route('sign-in');
    this.route('protected');
  });

  exports.default = Router;
});
define('project-app/routes/about', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({});
});
define('project-app/routes/application', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        actions: {
            login: function login() {
                var controller = this.get('controller');
                var email = controller.get('userEmail');
                var password = controller.get('userPassword');
                this.get('session').open('firebase', {
                    provider: 'password',
                    email: email,
                    password: password
                }).then(function () {
                    this.transitionTo('protected');
                }.bind(this));
            },
            logout: function logout() {
                this.get('session').close().then(function () {
                    this.transitionTo('application');
                }.bind(this));
            }
        }
    });
});
define('project-app/routes/messages', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model() {
      //return this.store.findRecord();//('message');
      return this.store.findAll('messages');
    }
  });
});
define('project-app/routes/pictures', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model() {
      return this.store.find('picture', {
        orderBy: 'title'
      });
    }
  });
});
define('project-app/routes/pictures/new', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({});
});
define('project-app/routes/protected', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    beforeModel: function beforeModel() {
      console.log(this.get('session'));
      if (!this.get('session.isAuthenticated')) {
        this.transitionTo('application');
      }
    }
  });
});
define('project-app/routes/sign-in', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    actions: {
      signIn: function signIn() {
        var controller = this.get('controller');
        //var email = controller.get('email');
        //var password = controller.get('password');
        this.get('session').open('firebase', {
          provider: 'password',
          email: this.get('email') || '',
          password: this.get('password') || ''
        }).then(function () {
          this.transitionTo('application');
        }.bind(this));
      }
    }
  });
});
define('project-app/routes/sign-up', ['exports', 'firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    actions: {
      signUp: function signUp() {
        var controller = this.get('controller');
        var firstName = controller.get('firstName');
        var lastName = controller.get('lastName');
        var email = controller.get('email');
        var password = controller.get('password');
        var ref = new _firebase.default("https://cpsc473project2-5c42a.firebaseio.com");
        var _this = this;

        ref.createUser({
          email: email,
          password: password
        }, function (error, userData) {
          if (error) {
            alert(error);
          } else {
            _this.get('session').open('firebase', {
              provider: 'password',
              'email': email,
              'password': password
            }).then(function () {
              var user = _this.store.createRecord('user', {
                id: userData.uid,
                firstName: firstName,
                lastName: lastName
              });
              user.save().then(function () {
                _this.transitionTo('protected');
              });
            });
          }
        });
      }
    }
  });
});
define('project-app/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('project-app/services/firebase-app', ['exports', 'emberfire/services/firebase-app'], function (exports, _firebaseApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _firebaseApp.default;
});
define('project-app/services/firebase', ['exports', 'emberfire/services/firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _firebase.default;
});
define('project-app/services/popup', ['exports', 'torii/services/popup'], function (exports, _popup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _popup.default;
    }
  });
});
define('project-app/services/torii-session', ['exports', 'torii/services/torii-session'], function (exports, _toriiSession) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toriiSession.default;
    }
  });
});
define('project-app/services/torii', ['exports', 'torii/services/torii'], function (exports, _torii) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _torii.default;
    }
  });
});
define("project-app/templates/about", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "gmqWOp5U", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"jumbotron\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n    \"],[6,\"h1\"],[7],[0,\"About Page\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\" Can i put more stuff here?\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"This is our Project 2\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"Project Summary: This is a Web application with real-time where users draw and chat with others\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"It is implemented using Ember JS, JavaScript, HTML, CSS, Bootstrap, socketIO, Firebase\"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n  \"],[2,\" Example row of columns \"],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n      \"],[6,\"h2\"],[7],[0,\"Ember.js\"],[8],[0,\"\\n      \"],[6,\"p\"],[7],[0,\"Ember.js is an open-source JavaScript web framework, based on the Model–view–viewmodel (MVVM) pattern. Ember is used on many popular websites, including Discourse, Groupon, LinkedIn, Vine, Live Nation, Nordstrom, Twitch.tv and Chipotle. \"],[8],[0,\"\\n      \"],[6,\"p\"],[7],[6,\"a\"],[9,\"class\",\"btn btn-default\"],[9,\"href\",\"https://emberjs.com/\"],[9,\"role\",\"button\"],[7],[0,\"View details »\"],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n      \"],[6,\"h2\"],[7],[0,\"Socket.IO\"],[8],[0,\"\\n      \"],[6,\"p\"],[7],[0,\"Socket.IO is a JavaScript library for realtime web applications. It enables realtime, bi-directional communication between web clients and servers. It works on every platform, browser or device, focusing equally on reliability and speed.\"],[8],[0,\"\\n      \"],[6,\"p\"],[7],[6,\"a\"],[9,\"class\",\"btn btn-default\"],[9,\"href\",\"https://socket.io/\"],[9,\"role\",\"button\"],[7],[0,\"View details »\"],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n      \"],[6,\"h2\"],[7],[0,\"Firebase\"],[8],[0,\"\\n      \"],[6,\"p\"],[7],[0,\"Firebase is a mobile and web application development platform. Firebase's initial product was a realtime database. The company was acquired by Google in October 2014 and a significant number of new features were featured in May 2016 at Google I/O.\"],[8],[0,\"\\n      \"],[6,\"p\"],[7],[6,\"a\"],[9,\"class\",\"btn btn-default\"],[9,\"href\",\"https://firebase.google.com/\"],[9,\"role\",\"button\"],[7],[0,\"View details »\"],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[2,\" footer \"],[0,\"\\n  \"],[6,\"footer\"],[7],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"Group Members: Aishwarya Iyer, Joshua Marvel, Tevisophea Heng, Kimberly Nguyen, Briana Hernandez\"],[8],[0,\"\\n\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[2,\" /container \"],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "project-app/templates/about.hbs" } });
});
define("project-app/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "D/X/EPrB", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n  \"],[6,\"nav\"],[9,\"class\",\"navbar navbar-inverse\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"container-fluid\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"navbar-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"navbar-toggle collapsed\"],[9,\"data-toggle\",\"collapse\"],[9,\"data-target\",\"#main-navbar\"],[7],[0,\"\\n          \"],[6,\"span\"],[9,\"class\",\"sr-only\"],[7],[0,\"Toggle navigation\"],[8],[0,\"\\n          \"],[6,\"span\"],[9,\"class\",\"icon-bar\"],[7],[8],[0,\"\\n          \"],[6,\"span\"],[9,\"class\",\"icon-bar\"],[7],[8],[0,\"\\n          \"],[6,\"span\"],[9,\"class\",\"icon-bar\"],[7],[8],[0,\"\\n          \"],[6,\"span\"],[9,\"class\",\"icon-bar\"],[7],[8],[0,\"\\n          \"],[6,\"span\"],[9,\"class\",\"icon-bar\"],[7],[8],[0,\"\\n\\n\\n        \"],[8],[0,\"\\n        \"],[4,\"link-to\",[\"index\"],[[\"class\"],[\"navbar-brand\"]],{\"statements\":[[0,\"Project 2\"]],\"parameters\":[]},null],[0,\"\\n      \"],[8],[0,\"\\n\\n      \"],[6,\"div\"],[9,\"class\",\"collapse navbar-collapse\"],[9,\"id\",\"main-navbar\"],[7],[0,\"\\n        \"],[6,\"ul\"],[9,\"class\",\"nav navbar-nav\"],[7],[0,\"\\n    \"],[4,\"link-to\",[\"index\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[6,\"a\"],[9,\"href\",\"\"],[7],[0,\"Home\"],[8]],\"parameters\":[]},null],[0,\"\\n    \"],[4,\"link-to\",[\"about\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[6,\"a\"],[9,\"href\",\"\"],[7],[0,\"About\"],[8]],\"parameters\":[]},null],[0,\"\\n    \"],[4,\"link-to\",[\"messages\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[6,\"a\"],[9,\"href\",\"\"],[7],[0,\"Messages\"],[8]],\"parameters\":[]},null],[0,\"\\n    \"],[4,\"link-to\",[\"pictures\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[6,\"a\"],[9,\"href\",\"\"],[7],[0,\"Pictures Library\"],[8]],\"parameters\":[]},null],[0,\"\\n    \"],[4,\"link-to\",[\"sign-up\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[6,\"a\"],[9,\"href\",\"\"],[7],[0,\"SIGN UP\"],[8]],\"parameters\":[]},null],[0,\"\\n    \"],[4,\"link-to\",[\"sign-in\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[6,\"a\"],[9,\"href\",\"\"],[7],[0,\"SIGN IN\"],[8]],\"parameters\":[]},null],[0,\"\\n  \"],[8],[0,\"\\n      \"],[8],[2,\" /.navbar-collapse \"],[0,\"\\n    \"],[8],[2,\" /.container-fluid \"],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"jumbotron text-center\"],[7],[0,\"\\n    \"],[4,\"link-to\",[\"pictures\"],null,{\"statements\":[[6,\"button\"],[9,\"class\",\"btn btn-primary\"],[7],[0,\"All Pictures\"],[8]],\"parameters\":[]},null],[0,\"\\n    \"],[4,\"link-to\",[\"pictures.new\"],null,{\"statements\":[[6,\"button\"],[9,\"class\",\"btn btn-primary\"],[7],[0,\"Add new pictures\"],[8]],\"parameters\":[]},null],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "project-app/templates/application.hbs" } });
});
define("project-app/templates/home", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "icxeq16T", "block": "{\"symbols\":[\"message\"],\"statements\":[[2,\" <p>Canvas</p> \"],[0,\"\\n\"],[6,\"div\"],[9,\"id\",\"cursors\"],[7],[0,\"\\n  \"],[2,\" The mouse pointers will be created here \"],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[25,\"canvas-draw\",null,[[\"action\"],[\"mouseDown\"]]],false],[0,\"\\n\\n\\n\"],[2,\" Chatting with EmberFire \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"new-msg-form\"],[7],[0,\"\\n  \"],[1,[25,\"input\",null,[[\"type\",\"placeholder\",\"value\",\"class\"],[\"text\",\"Name\",[20,[\"name\"]],\"name-input\"]]],false],[0,\" \"],[1,[25,\"input\",null,[[\"type\",\"placeholder\",\"value\",\"class\"],[\"text\",\"Message\",[20,[\"body\"]],\"msg-input\"]]],false],[0,\"\\n  \"],[6,\"button\"],[9,\"class\",\"btn btn-success\"],[3,\"action\",[[19,0,[]],\"addMessage\"]],[7],[0,\"Submit\"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[4,\"each\",[[20,[\"model\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[9,\"class\",\"each-msg\"],[7],[1,[19,1,[\"name\"]],false],[0,\" : \"],[1,[19,1,[\"body\"]],false],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n\"],[2,\" {{outlet}} \"],[0,\"\\n\\n\"],[6,\"footer\"],[7],[0,\"\\n  \"],[6,\"p\"],[7],[0,\"© Team 6 - CPSC 473 - CSUF\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "project-app/templates/home.hbs" } });
});
define("project-app/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "RVDwxy0U", "block": "{\"symbols\":[],\"statements\":[[2,\" Info when sign-in \"],[0,\"\\n\"],[4,\"if\",[[20,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"jumbotron\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n    \"],[6,\"h1\"],[7],[0,\"Welcome \"],[1,[20,[\"currentUser\",\"user\",\"email\"]],false],[0,\"!\"],[8],[0,\"\\n\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n\\n\\n  \"],[2,\" footer \"],[0,\"\\n  \"],[6,\"footer\"],[7],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"Group Members: Aishwarya Iyer, Joshua Marvel, Tevisophea Heng, Kimberly Nguyen, Briana Hernandez\"],[8],[0,\"\\n\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[6,\"div\"],[9,\"class\",\"page-header\"],[7],[0,\"\\n  \"],[6,\"h1\"],[7],[0,\"You must be signed in to use this app\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"list-group\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"sign-up\"],[[\"class\"],[\"list-group-item\"]],{\"statements\":[[0,\"    Sign Up\\n\"]],\"parameters\":[]},null],[4,\"link-to\",[\"sign-in\"],[[\"class\"],[\"list-group-item\"]],{\"statements\":[[0,\"    Sign In\\n\"]],\"parameters\":[]},null],[0,\"  \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[2,\" /container \"],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "project-app/templates/index.hbs" } });
});
define("project-app/templates/messages", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hlgF9m5N", "block": "{\"symbols\":[\"messages\"],\"statements\":[[6,\"div\"],[9,\"class\",\"jumbotron\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n    \"],[6,\"h1\"],[7],[0,\"Messages\"],[8],[0,\"\\n\\n    \"],[2,\" Chatting with EmberFire \"],[0,\"\\n\"],[4,\"each\",[[20,[\"model\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"each-msg\"],[7],[1,[19,1,[\"name\"]],false],[0,\" : \"],[1,[19,1,[\"body\"]],false],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[6,\"div\"],[9,\"class\",\"new-msg-form\"],[7],[0,\"\\n      \"],[1,[25,\"input\",null,[[\"type\",\"placeholder\",\"value\",\"class\"],[\"text\",\"Name\",[20,[\"name\"]],\"name-input\"]]],false],[0,\" \"],[1,[25,\"input\",null,[[\"type\",\"placeholder\",\"value\",\"class\"],[\"text\",\"Message\",[20,[\"body\"]],\"msg-input\"]]],false],[0,\"\\n     \"],[6,\"button\"],[9,\"class\",\"btn btn-primary\"],[3,\"action\",[[19,0,[]],\"addMessage\"]],[7],[0,\" Submit \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[2,\" {{outlet}} \"],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "project-app/templates/messages.hbs" } });
});
define("project-app/templates/navbar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "sfgS86+j", "block": "{\"symbols\":[],\"statements\":[[6,\"nav\"],[9,\"class\",\"navbar navbar-inverse\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"container-fluid\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"navbar-header\"],[7],[0,\"\\n      \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"navbar-toggle collapsed\"],[9,\"data-toggle\",\"collapse\"],[9,\"data-target\",\"#main-navbar\"],[7],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"sr-only\"],[7],[0,\"Toggle navigation\"],[8],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"icon-bar\"],[7],[8],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"icon-bar\"],[7],[8],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"icon-bar\"],[7],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[4,\"link-to\",[\"index\"],[[\"class\"],[\"navbar-brand\"]],{\"statements\":[[0,\"Project 2\"]],\"parameters\":[]},null],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"collapse navbar-collapse\"],[9,\"id\",\"main-navbar\"],[7],[0,\"\\n      \"],[6,\"ul\"],[9,\"class\",\"nav navbar-nav\"],[7],[0,\"\\n  \"],[4,\"link-to\",[\"index\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[6,\"a\"],[9,\"href\",\"\"],[7],[0,\"Home\"],[8]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"link-to\",[\"about\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[6,\"a\"],[9,\"href\",\"\"],[7],[0,\"About\"],[8]],\"parameters\":[]},null],[0,\"\\n\\n\\n\"],[8],[0,\"\\n    \"],[8],[2,\" /.navbar-collapse \"],[0,\"\\n  \"],[8],[2,\" /.container-fluid \"],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "project-app/templates/navbar.hbs" } });
});
define("project-app/templates/pictures", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qF2bI1BB", "block": "{\"symbols\":[\"picture\"],\"statements\":[[6,\"h1\"],[7],[0,\"Pictures Page\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\" Can i put more stuff here?\"],[8],[0,\"\\n\\n\"],[2,\" create-thing/template.hbs \"],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"col-md-6 col-md-offset-3\"],[7],[0,\"\\n  \"],[1,[18,\"outlet\"],false],[0,\"\\n  \"],[6,\"section\"],[7],[0,\"\\n    \"],[6,\"h2\"],[7],[0,\"Picture List\"],[8],[0,\"\\n\"],[4,\"each\",[[20,[\"model\"]]],null,{\"statements\":[[0,\"    \"],[6,\"p\"],[7],[0,\"\\n      \"],[6,\"span\"],[7],[6,\"strong\"],[7],[1,[19,1,[\"title\"]],false],[8],[0,\" - \"],[6,\"em\"],[7],[1,[19,1,[\"description\"]],false],[8],[8],[0,\"\\n      \"],[6,\"button\"],[9,\"class\",\"btn btn-danger\"],[3,\"action\",[[19,0,[]],\"deleteBook\",[19,1,[]]]],[7],[0,\"Delete\"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "project-app/templates/pictures.hbs" } });
});
define("project-app/templates/pictures/new", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4mmkQLZF", "block": "{\"symbols\":[],\"statements\":[[6,\"h2\"],[9,\"id\",\"newPictures\"],[7],[0,\"New Pictures\"],[8],[0,\"\\n\"],[6,\"form\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n    \"],[6,\"label\"],[9,\"for\",\"titleInput\"],[7],[0,\"Title\"],[8],[0,\"\\n    \"],[1,[25,\"input\",null,[[\"value\",\"placeholder\",\"class\",\"id\"],[[20,[\"title\"]],\"Title\",\"form-control\",\"titleInput\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n    \"],[6,\"label\"],[9,\"for\",\"descriptionInput\"],[7],[0,\"Description\"],[8],[0,\"\\n    \"],[1,[25,\"input\",null,[[\"value\",\"placeholder\",\"class\",\"id\"],[[20,[\"desc\"]],\"Author\",\"form-control\",\"descriptionInput\"]]],false],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[6,\"button\"],[9,\"class\",\"btn btn-default\"],[3,\"action\",[[19,0,[]],\"publishPictures\"]],[7],[0,\"Publish\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "project-app/templates/pictures/new.hbs" } });
});
define("project-app/templates/protected", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5GRqUi3u", "block": "{\"symbols\":[],\"statements\":[[6,\"p\"],[7],[0,\"This is our protected content which can only be seen by logged in users.\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "project-app/templates/protected.hbs" } });
});
define("project-app/templates/sign-in", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4Hh2Kb8Z", "block": "{\"symbols\":[],\"statements\":[[6,\"p\"],[7],[0,\"\\n  \"],[1,[25,\"input\",null,[[\"type\",\"value\",\"placeholder\"],[\"text\",[20,[\"email\"]],\"Email\"]]],false],[6,\"br\"],[7],[8],[0,\"\\n  \"],[1,[25,\"input\",null,[[\"type\",\"value\",\"placeholder\"],[\"password\",[20,[\"password\"]],\"Password\"]]],false],[6,\"br\"],[7],[8],[0,\"\\n  \"],[6,\"button\"],[3,\"action\",[[19,0,[]],\"signIn\"]],[7],[0,\" Sign In \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "project-app/templates/sign-in.hbs" } });
});
define("project-app/templates/sign-up", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "j8FknKW+", "block": "{\"symbols\":[],\"statements\":[[0,\"Signup here: \"],[6,\"br\"],[7],[8],[0,\"\\n\\n\"],[1,[25,\"input\",null,[[\"type\",\"value\",\"placeholder\"],[\"text\",[20,[\"email\"]],\"Email\"]]],false],[6,\"br\"],[7],[8],[0,\"\\n\"],[1,[25,\"input\",null,[[\"type\",\"value\",\"placeholder\"],[\"password\",[20,[\"password\"]],\"Password\"]]],false],[6,\"br\"],[7],[8],[0,\"\\n\"],[6,\"button\"],[3,\"action\",[[19,0,[]],\"signUp\"]],[7],[0,\" Sign Up \"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "project-app/templates/sign-up.hbs" } });
});
define('project-app/torii-adapters/application', ['exports', 'emberfire/torii-adapters/firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _firebase.default.extend({
    firebase: Ember.inject.service()
  });
});
define('project-app/torii-providers/firebase', ['exports', 'emberfire/torii-providers/firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _firebase.default;
});


define('project-app/config/environment', [], function() {
  var prefix = 'project-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("project-app/app")["default"].create({"name":"project-app","version":"0.0.0+10438c22"});
}
//# sourceMappingURL=project-app.map
