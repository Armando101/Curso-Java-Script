const assert = require('assert');
const buildMessage = require('../utils/buildMessage');

// Only me permite sólo testea este srcipt
// describe.only('utils - buildMessage', function() {
describe('utils - buildMessage', function() {
	describe('When recives an entity and action', function() {
		it('Should return the respective message', function() {
			const result = buildMessage('movie', 'create');
			const expect = 'movie created';
			assert.strictEqual(result, expect);
		});
	});

	describe('When recives an entity and an action and is a list ', function() {
		it('Should return the respective message eith the entity in plural', function() {
			const result = buildMessage('movie', 'list');
			const expected = 'movies listed';
			assert.strictEqual(result, expected);
		})
	})
});