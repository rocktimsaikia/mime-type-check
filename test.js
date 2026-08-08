const assert = require('node:assert/strict');
const test = require('node:test');
const mimeTypeCheck = require('.');

test('returns every MIME type for an extension', () => {
	assert.deepEqual(mimeTypeCheck('png'), ['image/png']);
	assert.deepEqual(mimeTypeCheck('txt'), ['text/plain']);
	assert.deepEqual(mimeTypeCheck('mid'), ['audio/midi']);
	assert.deepEqual(mimeTypeCheck('3gpp'), ['audio/3gpp', 'video/3gpp']);
});

test('throws on an unknown extension', () => {
	assert.throws(() => mimeTypeCheck('foo'), {message: 'Not a valid extension'});
});
