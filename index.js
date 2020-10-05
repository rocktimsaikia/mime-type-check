'use strict';
const mimeTypes = require('mime-db');

const getMimeType = extension => {
	const matchedMimeTypes = [];

	for (const type in mimeTypes) {
		if (Object.prototype.hasOwnProperty.call(mimeTypes[type], 'extensions')) {
			const {extensions} = mimeTypes[type];

			if (extensions.includes(extension)) {
				matchedMimeTypes.push(type);
			}
		}
	}

	if (matchedMimeTypes.length === 0) {
		throw new Error('Not a valid extension');
	}

	return matchedMimeTypes;
};

module.exports = string => {
	if (typeof string !== 'string') {
		throw new TypeError('expected a string, got %s', typeof string);
	}

	string = string.trim().toLowerCase();
	return getMimeType(string);
};
