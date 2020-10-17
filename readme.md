# mime-type-check ![build](https://travis-ci.com/RocktimSaikia/mime-type-check.svg?branch=master) ![license](https://img.shields.io/github/license/rocktimsaikia/mime-type-check)

> Check all the available `MIME types` of a extension.

<br>

It uses [Mime-db](https://github.com/jshttp/mime-db) as its core database.<br>
Do not use this module to actually check the MIME type of a local or remote file. For that use [File-type](https://github.com/sindresorhus/file-type)

## Install

```bash
npm install mime-type-check
```

## Usage

```js
const getMimeType = require("mime-type-check");

getMimeType("svg"); //=> ['image/svg+xml']
getMimeType("png"); //=> ['image/png']
getMimeType("3gpp"); //=> ['audio/3gpp', 'video/3gpp']
```

## API

### getMimeType(string)

`string` is the extension to check the mimetypes for.

## License

MIT © [Rocktim Saikia](https://rocktim.xyz)
