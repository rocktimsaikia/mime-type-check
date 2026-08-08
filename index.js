import mimeDb from 'mime-db';

export default function mimeTypeCheck(extension) {
	if (typeof extension !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof extension}`);
	}

	const normalized = extension.trim().toLowerCase();
	const matched = Object.keys(mimeDb).filter(type => mimeDb[type].extensions?.includes(normalized));

	if (matched.length === 0) {
		throw new Error('Not a valid extension');
	}

	return matched;
}
