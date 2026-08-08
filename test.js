import assert from 'node:assert/strict';
import path from 'node:path';
import test from 'node:test';
import mimeTypeCheck from './index.js';

test('returns every MIME type for an extension', () => {
	assert.deepEqual(mimeTypeCheck('png'), ['image/png']);
	assert.deepEqual(mimeTypeCheck('txt'), ['text/plain']);
	assert.deepEqual(mimeTypeCheck('mid'), ['audio/midi']);
	assert.deepEqual(mimeTypeCheck('3gpp'), ['audio/3gpp', 'video/3gpp']);
});

test('normalizes whitespace, casing and a leading dot', () => {
	assert.deepEqual(mimeTypeCheck('  PNG  '), ['image/png']);
	assert.deepEqual(mimeTypeCheck('.png'), ['image/png']);
	assert.deepEqual(mimeTypeCheck(path.extname('photo.PNG')), ['image/png']);
});

test('returns results in a stable sorted order', () => {
	const types = mimeTypeCheck('3gpp');
	assert.deepEqual(types, [...types].sort());
});

test('callers cannot mutate the shared index', () => {
	mimeTypeCheck('png').push('image/bogus');
	assert.deepEqual(mimeTypeCheck('png'), ['image/png']);
});

test('throws on an unknown extension', () => {
	assert.throws(() => mimeTypeCheck('foo'), {message: 'Not a valid extension'});
	assert.throws(() => mimeTypeCheck(''), {message: 'Not a valid extension'});
});

test('throws on a non-string input', () => {
	assert.throws(() => mimeTypeCheck(42), {name: 'TypeError', message: 'Expected a string, got number'});
	assert.throws(() => mimeTypeCheck(null), {name: 'TypeError', message: 'Expected a string, got null'});
});
