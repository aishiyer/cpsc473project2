'use strict';

define('project-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/messages.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/messages.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/movies.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/movies.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/movies/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/movies/edit.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/movies/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/movies/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/pictures.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/pictures.js should pass ESLint\n\n1:8 - \'Controller\' is defined but never used. (no-unused-vars)\n3:16 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('controllers/pictures/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/pictures/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/ratings.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/ratings.js should pass ESLint\n\n54:10 - \'todo\' is assigned a value but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/sign-in.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/sign-in.js should pass ESLint\n\n6:13 - \'controller\' is assigned a value but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/sign-up.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/sign-up.js should pass ESLint\n\n9:11 - \'controller\' is assigned a value but never used. (no-unused-vars)');
  });

  QUnit.test('models/messages.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/messages.js should pass ESLint\n\n');
  });

  QUnit.test('models/movie.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/movie.js should pass ESLint\n\n');
  });

  QUnit.test('models/picture.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/picture.js should pass ESLint\n\n');
  });

  QUnit.test('models/ratings.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/ratings.js should pass ESLint\n\n');
  });

  QUnit.test('models/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/about.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/about.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/contact.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/contact.js should pass ESLint\n\n');
  });

  QUnit.test('routes/messages.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/messages.js should pass ESLint\n\n');
  });

  QUnit.test('routes/movies.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/movies.js should pass ESLint\n\n');
  });

  QUnit.test('routes/movies/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/movies/edit.js should pass ESLint\n\n');
  });

  QUnit.test('routes/movies/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/movies/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/pictures.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/pictures.js should pass ESLint\n\n');
  });

  QUnit.test('routes/pictures/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/pictures/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/protected.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/protected.js should pass ESLint\n\n5:5 - Unexpected console statement. (no-console)');
  });

  QUnit.test('routes/ratings.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/ratings.js should pass ESLint\n\n');
  });

  QUnit.test('routes/sign-in.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/sign-in.js should pass ESLint\n\n6:11 - \'controller\' is assigned a value but never used. (no-unused-vars)');
  });

  QUnit.test('routes/sign-up.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/sign-up.js should pass ESLint\n\n');
  });

  QUnit.test('torii-adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'torii-adapters/application.js should pass ESLint\n\n');
  });
});
define('project-app/tests/helpers/create-offline-ref', ['exports', 'firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createOfflineRef;


  /**
   * Creates an offline firebase reference with optional initial data and url.
   *
   * Be sure to `stubfirebase()` and `unstubfirebase()` in your tests!
   *
   * @param  {!Object} [initialData]
   * @param  {string} [url]
   * @param  {string} [apiKey]
   * @return {!firebase.database.Reference}
   */
  function createOfflineRef(initialData) {
    var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'https://emberfire-tests-2c814.firebaseio.com';
    var apiKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'AIzaSyC9-ndBb1WR05rRF1msVQDV6EBqB752m6o';


    if (!_firebase.default._unStub) {
      throw new Error('Please use stubFirebase() before calling this method');
    }

    var config = {
      apiKey: apiKey,
      authDomain: 'emberfire-tests-2c814.firebaseapp.com',
      databaseURL: url,
      storageBucket: ''
    };

    var app = void 0;

    try {
      app = _firebase.default.app();
    } catch (e) {
      app = _firebase.default.initializeApp(config);
    }

    var ref = app.database().ref();

    app.database().goOffline(); // must be called after the ref is created

    if (initialData) {
      ref.set(initialData);
    }

    return ref;
  }
});
define('project-app/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  var run = Ember.run;
  function destroyApp(application) {
    run(application, 'destroy');
  }
});
define('project-app/tests/helpers/destroy-firebase-apps', ['exports', 'firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyFirebaseApps;
  var run = Ember.run;


  /**
   * Destroy all Firebase apps.
   */
  function destroyFirebaseApps() {
    var deletions = _firebase.default.apps.map(function (app) {
      return app.delete();
    });
    Ember.RSVP.all(deletions).then(function () {
      return run(function () {
        // NOOP to delay run loop until the apps are destroyed
      });
    });
  }
});
define('project-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'project-app/tests/helpers/start-app', 'project-app/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('project-app/tests/helpers/replace-app-ref', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = replaceAppRef;
  /**
   * Updates the supplied app adapter's Firebase reference.
   *
   * @param  {!Ember.Application} app
   * @param  {!firebase.database.Reference} ref
   * @param  {string} [model]  The model, if overriding a model specific adapter
   */
  function replaceAppRef(app, ref) {
    var model = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'application';

    app.register('service:firebaseMock', ref, { instantiate: false, singleton: true });
    app.inject('adapter:firebase', 'firebase', 'service:firebaseMock');
    app.inject('adapter:' + model, 'firebase', 'service:firebaseMock');
  }
});
define('project-app/tests/helpers/replace-firebase-app-service', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = replaceFirebaseAppService;
  /**
   * Replaces the `firebaseApp` service with your own using injection overrides.
   *
   * This is usually not needed in test modules, where you can re-register over
   * existing names in the registry, but in acceptance tests, some registry/inject
   * magic is needed.
   *
   * @param  {!Ember.Application} app
   * @param  {!Object} newService
   */
  function replaceFirebaseAppService(app, newService) {
    app.register('service:firebaseAppMock', newService, { instantiate: false, singleton: true });
    app.inject('torii-provider:firebase', 'firebaseApp', 'service:firebaseAppMock');
    app.inject('torii-adapter:firebase', 'firebaseApp', 'service:firebaseAppMock');
  }
});
define('project-app/tests/helpers/resolver', ['exports', 'project-app/resolver', 'project-app/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('project-app/tests/helpers/start-app', ['exports', 'project-app/app', 'project-app/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  var merge = Ember.merge;
  var run = Ember.run;
  function startApp(attrs) {
    var attributes = merge({}, _environment.default.APP);
    attributes = merge(attributes, attrs); // use defaults, but you can override;

    return run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('project-app/tests/helpers/stub-firebase', ['exports', 'firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = stubFirebase;


  /**
   * When a reference is in offline mode it will not call any callbacks
   * until it goes online and resyncs. The ref will have already
   * updated its internal cache with the changed values so we shortcut
   * the process and call the supplied callbacks immediately (asynchronously).
   */
  function stubFirebase() {
    // check for existing stubbing
    if (!_firebase.default._unStub) {
      var originalSet = _firebase.default.database.Reference.prototype.set;
      var originalUpdate = _firebase.default.database.Reference.prototype.update;
      var originalRemove = _firebase.default.database.Reference.prototype.remove;

      _firebase.default._unStub = function () {
        _firebase.default.database.Reference.prototype.set = originalSet;
        _firebase.default.database.Reference.prototype.update = originalUpdate;
        _firebase.default.database.Reference.prototype.remove = originalRemove;
      };

      _firebase.default.database.Reference.prototype.set = function (data, cb) {
        originalSet.call(this, data);
        if (typeof cb === 'function') {
          setTimeout(cb, 0);
        }
      };

      _firebase.default.database.Reference.prototype.update = function (data, cb) {
        originalUpdate.call(this, data);
        if (typeof cb === 'function') {
          setTimeout(cb, 0);
        }
      };

      _firebase.default.database.Reference.prototype.remove = function (cb) {
        originalRemove.call(this);
        if (typeof cb === 'function') {
          setTimeout(cb, 0);
        }
      };
    }
  }
});
define('project-app/tests/helpers/torii', ['exports', 'project-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.stubValidSession = stubValidSession;
  var sessionServiceName = _environment.default.torii.sessionServiceName;
  function stubValidSession(application, sessionData) {
    var session = application.__container__.lookup('service:' + sessionServiceName);

    var sm = session.get('stateMachine');
    Ember.run(function () {
      sm.send('startOpen');
      sm.send('finishOpen', sessionData);
    });
  }
});
define('project-app/tests/helpers/unstub-firebase', ['exports', 'firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = unstubFirebase;
  function unstubFirebase() {
    if (typeof _firebase.default._unStub === 'function') {
      _firebase.default._unStub();
      delete _firebase.default._unStub;
    }
  }
});
define('project-app/tests/test-helper', ['project-app/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('project-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/movies-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/movies-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/movies/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/movies/edit-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/movies/new-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/movies/new-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/pictures-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/pictures-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/sign-in-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/sign-in-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/sign-up-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/sign-up-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/survey-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/survey-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/messages-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/messages-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/movies-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/movies-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/survey-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/survey-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/user-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/about-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/contact-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contact-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/messages-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/messages-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/movies-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/movies-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/movies/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/movies/edit-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/movies/new-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/movies/new-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/pictures-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/pictures-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/pictures/new-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/pictures/new-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/protected-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/protected-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/sign-in-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/sign-in-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/sign-up-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/sign-up-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/survey-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/survey-test.js should pass ESLint\n\n');
  });
});
define('project-app/tests/unit/controllers/movies-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:movies', 'Unit | Controller | movies', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('project-app/tests/unit/controllers/movies/edit-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:movies/edit', 'Unit | Controller | movies/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('project-app/tests/unit/controllers/movies/new-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:movies/new', 'Unit | Controller | movies/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('project-app/tests/unit/controllers/pictures-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:pictures', 'Unit | Controller | pictures', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('project-app/tests/unit/controllers/sign-in-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:sign-in', 'Unit | Controller | sign in', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('project-app/tests/unit/controllers/sign-up-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:sign-up', 'Unit | Controller | sign up', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('project-app/tests/unit/controllers/survey-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:survey', 'Unit | Controller | survey', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('project-app/tests/unit/models/messages-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('messages', 'Unit | Model | messages', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('project-app/tests/unit/models/movies-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('movies', 'Unit | Model | movies', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('project-app/tests/unit/models/survey-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('survey', 'Unit | Model | survey', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('project-app/tests/unit/models/user-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('user', 'Unit | Model | user', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('project-app/tests/unit/routes/about-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:about', 'Unit | Route | about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('project-app/tests/unit/routes/contact-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:contact', 'Unit | Route | contact', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('project-app/tests/unit/routes/messages-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:messages', 'Unit | Route | messages', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('project-app/tests/unit/routes/movies-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:movies', 'Unit | Route | movies', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('project-app/tests/unit/routes/movies/edit-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:movies/edit', 'Unit | Route | movies/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('project-app/tests/unit/routes/movies/new-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:movies/new', 'Unit | Route | movies/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('project-app/tests/unit/routes/pictures-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:pictures', 'Unit | Route | pictures', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('project-app/tests/unit/routes/pictures/new-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:pictures/new', 'Unit | Route | pictures/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('project-app/tests/unit/routes/protected-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:protected', 'Unit | Route | protected', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('project-app/tests/unit/routes/sign-in-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:sign-in', 'Unit | Route | sign in', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('project-app/tests/unit/routes/sign-up-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:sign-up', 'Unit | Route | sign up', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('project-app/tests/unit/routes/survey-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:survey', 'Unit | Route | survey', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('project-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
