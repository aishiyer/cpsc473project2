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

  QUnit.test('unit/models/messages-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/messages-test.js should pass ESLint\n\n');
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
});