QUnit.module('ESLint | app');

QUnit.test('adapters/application.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
});

QUnit.test('app.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'app.js should pass ESLint\n\n');
});

QUnit.test('controllers/sign-in.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/sign-in.js should pass ESLint\n\n2:8 - \'Controller\' is defined but never used. (no-unused-vars)\n16:9 - Unexpected console statement. (no-console)');
});

QUnit.test('controllers/sign-up.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/sign-up.js should pass ESLint\n\n2:8 - \'Controller\' is defined but never used. (no-unused-vars)\n12:18 - \'data\' is defined but never used. (no-unused-vars)\n14:11 - Unexpected console statement. (no-console)');
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

QUnit.test('routes/messages.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/messages.js should pass ESLint\n\n');
});

QUnit.test('routes/pictures.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/pictures.js should pass ESLint\n\n');
});

QUnit.test('routes/protected.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/protected.js should pass ESLint\n\n5:5 - Unexpected console statement. (no-console)');
});

QUnit.test('routes/sign-in.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/sign-in.js should pass ESLint\n\n');
});

QUnit.test('routes/sign-up.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/sign-up.js should pass ESLint\n\n');
});

QUnit.test('torii-adapters/application.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'torii-adapters/application.js should pass ESLint\n\n');
});

