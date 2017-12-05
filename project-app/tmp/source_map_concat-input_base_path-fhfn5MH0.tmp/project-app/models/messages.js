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