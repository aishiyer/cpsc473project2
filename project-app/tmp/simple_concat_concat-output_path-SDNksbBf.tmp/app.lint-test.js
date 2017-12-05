QUnit.module('ESLint | app');

QUnit.test('adapters/application.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
});

QUnit.test('app.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'app.js should pass ESLint\n\n');
});

QUnit.test('controllers/messages.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'controllers/messages.js should pass ESLint\n\n');
});

QUnit.test('controllers/movies.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'controllers/movies.js should pass ESLint\n\n');
});

QUnit.test('controllers/movies/edit.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'controllers/movies/edit.js should pass ESLint\n\n');
});

QUnit.test('controllers/movies/new.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'controllers/movies/new.js should pass ESLint\n\n');
});

QUnit.test('controllers/pictures.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/pictures.js should pass ESLint\n\n1:8 - \'Controller\' is defined but never used. (no-unused-vars)\n3:16 - \'Ember\' is not defined. (no-undef)');
});

QUnit.test('controllers/pictures/new.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'controllers/pictures/new.js should pass ESLint\n\n');
});

QUnit.test('controllers/ratings.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/ratings.js should pass ESLint\n\n54:10 - \'todo\' is assigned a value but never used. (no-unused-vars)');
});

QUnit.test('controllers/sign-in.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/sign-in.js should pass ESLint\n\n6:13 - \'controller\' is assigned a value but never used. (no-unused-vars)');
});

QUnit.test('controllers/sign-up.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/sign-up.js should pass ESLint\n\n9:11 - \'controller\' is assigned a value but never used. (no-unused-vars)');
});

QUnit.test('controllers/upload.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/upload.js should pass ESLint\n\n6:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n7:22 - \'firebase\' is not defined. (no-undef)\n8:9 - \'imageRef\' is assigned a value but never used. (no-unused-vars)\n9:9 - \'imageSRef\' is assigned a value but never used. (no-unused-vars)\n11:9 - \'file\' is already defined. (no-redeclare)\n11:16 - \'$\' is not defined. (no-undef)\n12:5 - \'ref\' is not defined. (no-undef)\n12:33 - \'snapshot\' is defined but never used. (no-unused-vars)\n13:6 - Unexpected console statement. (no-console)\n22:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n23:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n23:7 - Unexpected console statement. (no-console)\n24:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n25:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n25:14 - \'firebase\' is not defined. (no-undef)\n26:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n26:11 - Unexpected console statement. (no-console)\n27:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n28:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n28:14 - \'firebase\' is not defined. (no-undef)\n29:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n29:11 - Unexpected console statement. (no-console)\n30:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n31:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n32:16 - \'error\' is defined but never used. (no-unused-vars)\n34:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n34:10 - \'downloadURL\' is assigned a value but never used. (no-unused-vars)');
});

QUnit.test('models/messages.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'models/messages.js should pass ESLint\n\n');
});

QUnit.test('models/movie.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'models/movie.js should pass ESLint\n\n');
});

QUnit.test('models/picture.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'models/picture.js should pass ESLint\n\n');
});

QUnit.test('models/ratings.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'models/ratings.js should pass ESLint\n\n');
});

QUnit.test('models/user.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'models/user.js should pass ESLint\n\n');
});

QUnit.test('resolver.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'resolver.js should pass ESLint\n\n');
});

QUnit.test('router.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'router.js should pass ESLint\n\n');
});

QUnit.test('routes/about.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/about.js should pass ESLint\n\n');
});

QUnit.test('routes/application.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/application.js should pass ESLint\n\n');
});

QUnit.test('routes/contact.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/contact.js should pass ESLint\n\n');
});

QUnit.test('routes/messages.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/messages.js should pass ESLint\n\n');
});

QUnit.test('routes/movies.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/movies.js should pass ESLint\n\n');
});

QUnit.test('routes/movies/edit.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/movies/edit.js should pass ESLint\n\n');
});

QUnit.test('routes/movies/new.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/movies/new.js should pass ESLint\n\n');
});

QUnit.test('routes/pictures.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/pictures.js should pass ESLint\n\n');
});

QUnit.test('routes/pictures/new.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/pictures/new.js should pass ESLint\n\n');
});

QUnit.test('routes/protected.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/protected.js should pass ESLint\n\n5:5 - Unexpected console statement. (no-console)');
});

QUnit.test('routes/ratings.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/ratings.js should pass ESLint\n\n');
});

QUnit.test('routes/sign-in.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/sign-in.js should pass ESLint\n\n6:11 - \'controller\' is assigned a value but never used. (no-unused-vars)');
});

QUnit.test('routes/sign-up.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/sign-up.js should pass ESLint\n\n');
});

QUnit.test('torii-adapters/application.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'torii-adapters/application.js should pass ESLint\n\n');
});

