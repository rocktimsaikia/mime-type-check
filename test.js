import assert from 'node:assert/strict';
import path from 'node:path';
import {describe, test} from 'node:test';
import mimeDb from 'mime-db';
import mimeTypeCheck from './index.js';

const everyExtension = new Map();
for (const [type, {extensions}] of Object.entries(mimeDb)) {
	for (const extension of extensions ?? []) {
		everyExtension.set(extension, [...(everyExtension.get(extension) ?? []), type]);
	}
}

describe('lookups', () => {
	test('resolves an extension with a single MIME type', () => {
		assert.deepEqual(mimeTypeCheck('png'), ['image/png']);
		assert.deepEqual(mimeTypeCheck('txt'), ['text/plain']);
		assert.deepEqual(mimeTypeCheck('mid'), ['audio/midi']);
		assert.deepEqual(mimeTypeCheck('json'), ['application/json']);
		assert.deepEqual(mimeTypeCheck('pdf'), ['application/pdf']);
		assert.deepEqual(mimeTypeCheck('svg'), ['image/svg+xml']);
	});

	test('resolves an extension with several MIME types', () => {
		assert.deepEqual(mimeTypeCheck('3gpp'), ['audio/3gpp', 'video/3gpp']);
	});

	test('resolves every extension mime-db knows about', () => {
		for (const extension of everyExtension.keys()) {
			assert.ok(mimeTypeCheck(extension).length > 0, `${extension} resolved to nothing`);
		}
	});

	test('every returned type actually lists that extension in mime-db', () => {
		for (const extension of everyExtension.keys()) {
			for (const type of mimeTypeCheck(extension)) {
				assert.ok(mimeDb[type]?.extensions?.includes(extension), `${type} does not list ${extension}`);
			}
		}
	});

	test('finds every type mime-db registers for an extension, not just the first', () => {
		for (const [extension, types] of everyExtension) {
			assert.deepEqual(mimeTypeCheck(extension), [...types].sort());
		}
	});
});

describe('normalization', () => {
	test('trims surrounding whitespace', () => {
		assert.deepEqual(mimeTypeCheck('  png  '), ['image/png']);
		assert.deepEqual(mimeTypeCheck('\tpng\n'), ['image/png']);
	});

	test('is case-insensitive', () => {
		assert.deepEqual(mimeTypeCheck('PNG'), ['image/png']);
		assert.deepEqual(mimeTypeCheck('PnG'), ['image/png']);
	});

	test('strips a leading dot', () => {
		assert.deepEqual(mimeTypeCheck('.png'), ['image/png']);
	});

	test('accepts path.extname() output directly', () => {
		assert.deepEqual(mimeTypeCheck(path.extname('photo.png')), ['image/png']);
		assert.deepEqual(mimeTypeCheck(path.extname('/tmp/archive.tar.gz')), ['application/gzip']);
	});

	test('applies every normalization at once', () => {
		assert.deepEqual(mimeTypeCheck('  .PNG  '), ['image/png']);
	});
});

describe('return value', () => {
	test('is a sorted array of non-empty type strings', () => {
		for (const extension of everyExtension.keys()) {
			const types = mimeTypeCheck(extension);
			assert.ok(Array.isArray(types));
			assert.deepEqual(types, [...types].sort());
			assert.ok(types.every(type => typeof type === 'string' && type.includes('/')));
		}
	});

	test('is a fresh array on every call', () => {
		assert.notEqual(mimeTypeCheck('png'), mimeTypeCheck('png'));
	});

	test('cannot be mutated into the shared index', () => {
		mimeTypeCheck('3gpp').push('image/bogus');
		mimeTypeCheck('3gpp').length = 0;
		assert.deepEqual(mimeTypeCheck('3gpp'), ['audio/3gpp', 'video/3gpp']);
	});
});

describe('unknown extensions', () => {
	for (const input of ['foo', '', '   ', '.', '.foo', '..png', 'png.', 'p ng', 'image/png']) {
		test(`throws on ${JSON.stringify(input)}`, () => {
			assert.throws(() => mimeTypeCheck(input), {name: 'Error', message: 'Not a valid extension'});
		});
	}
});

describe('invalid input types', () => {
	for (const [label, input] of [
		['number', 42],
		['NaN', Number.NaN],
		['null', null],
		['undefined', undefined],
		['boolean', true],
		['object', {}],
		['array', ['png']],
		['function', () => 'png'],
		['symbol', Symbol('png')],
		['bigint', 10n],
		['String object', new String('png')],
	]) {
		test(`throws a TypeError on a ${label}`, () => {
			assert.throws(() => mimeTypeCheck(input), {name: 'TypeError'});
		});
	}

	test('names the received type in the message', () => {
		assert.throws(() => mimeTypeCheck(42), {message: 'Expected a string, got number'});
		assert.throws(() => mimeTypeCheck(null), {message: 'Expected a string, got null'});
		assert.throws(() => mimeTypeCheck(undefined), {message: 'Expected a string, got undefined'});
		assert.throws(() => mimeTypeCheck({}), {message: 'Expected a string, got object'});
	});

	test('rejects no argument at all', () => {
		assert.throws(() => mimeTypeCheck(), {name: 'TypeError', message: 'Expected a string, got undefined'});
	});
});
