const test = require('ava');
const getMimeType = require('.');

test('check invalid files with extensions', t => {
	t.throws(() => {
		getMimeType('foo');
	}, {
		message: 'Not a valid extension'
	});
});

test('basic MIME type check', t => {
	t.deepEqual(getMimeType('png'), ['image/png']);
	t.deepEqual(getMimeType('txt'), ['text/plain']);
	t.deepEqual(getMimeType('mid'), ['audio/midi']);
	t.deepEqual(getMimeType('3gpp'), ['audio/3gpp', 'video/3gpp']);
});
