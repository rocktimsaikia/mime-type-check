# mime-type-check

![CI](https://github.com/rocktimsaikia/mime-type-check/actions/workflows/ci.yml/badge.svg)
![npm](https://badgen.net/npm/v/mime-type-check)

Check all the available MIME types of an extension.

Backed by [mime-db](https://github.com/jshttp/mime-db). This looks up an extension string, it does not inspect file contents. To detect the real type of a local or remote file, use [file-type](https://github.com/sindresorhus/file-type).

## Installation

Requires Node.js 20 or later. Ships with TypeScript types.

This package is ESM-only, so import it with `import`. `require()` throws `ERR_REQUIRE_ESM` on Node 20.18 and below, and on newer versions returns the module namespace rather than the function itself - meaning `require('mime-type-check')('png')` fails either way.

```bash
npm install mime-type-check
```

## Usage

```js
import mimeTypeCheck from 'mime-type-check';

mimeTypeCheck('svg');
mimeTypeCheck('png');
mimeTypeCheck('3gpp');
```

Output:

```js
['image/svg+xml']
['image/png']
['audio/3gpp', 'video/3gpp']
```

A leading dot, surrounding whitespace and casing are all normalized, so `'.PNG'` and `'png'` are equivalent and `path.extname()` output works as-is:

```js
import path from 'node:path';

mimeTypeCheck(path.extname('photo.png')); //=> ['image/png']
```

Results are sorted alphabetically. An unrecognized extension returns an empty array rather than throwing, so a miss needs no `try`/`catch`:

```js
mimeTypeCheck('nope'); //=> []
```

A `TypeError` is thrown only when the argument is not a string, which is a programming error rather than a lookup result.

## Related

- [**file-type**](https://github.com/sindresorhus/file-type): Detect the file type of a file, stream, or data.
- [**mime-db**](https://github.com/jshttp/mime-db): Media Type Database.
- [**meta-fetcher**](https://github.com/rocktimsaikia/meta-fetcher): Scrape metadata from a website URL.

## License

MIT 2020-2026 &copy; [Rocktim Saikia](https://rocktim.dev)
