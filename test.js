import assert from 'node:assert/strict';
import test from 'node:test';
import mimeTypeCheck from './index.js';

test('returns every MIME type for an extension', () => {
	assert.deepEqual(mimeTypeCheck('png'), ['image/png']);
	assert.deepEqual(mimeTypeCheck('txt'), ['text/plain']);
	assert.deepEqual(mimeTypeCheck('mid'), ['audio/midi']);
	assert.deepEqual(mimeTypeCheck('3gpp'), ['audio/3gpp', 'video/3gpp']);
});

test('normalizes whitespace and casing', () => {
	assert.deepEqual(mimeTypeCheck('  PNG  '), ['image/png']);
});

test('throws on an unknown extension', () => {
	assert.throws(() => mimeTypeCheck('foo'), {message: 'Not a valid extension'});
});

test('throws on a non-string input', () => {
	assert.throws(() => mimeTypeCheck(42), {name: 'TypeError', message: 'Expected a string, got number'});
});
