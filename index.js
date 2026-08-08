import mimeDb from 'mime-db';

// mime-db has ~2500 entries; index them once so a lookup is a Map hit, not a full scan per call.
const extensionIndex = new Map();
for (const [type, {extensions}] of Object.entries(mimeDb)) {
	for (const extension of extensions ?? []) {
		const types = extensionIndex.get(extension);
		if (types) {
			types.push(type);
		} else {
			extensionIndex.set(extension, [type]);
		}
	}
}

export default function mimeTypeCheck(extension) {
	if (typeof extension !== 'string') {
		throw new TypeError(`Expected a string, got ${extension === null ? 'null' : typeof extension}`);
	}

	// Strip a leading dot so path.extname() output ('.png') works as-is.
	const normalized = extension.trim().toLowerCase().replace(/^\./, '');
	const types = extensionIndex.get(normalized);

	if (!types) {
		throw new Error('Not a valid extension');
	}

	// Copy so callers cannot mutate the shared index; sort so the order is a contract, not mime-db's key order.
	return [...types].sort();
}
