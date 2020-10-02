# mime-type-check ![build](https://travis-ci.com/RocktimSaikia/mime-type-check.svg?branch=master) ![license](https://img.shields.io/github/license/rocktimsaikia/mime-type-check)

> Get `MIME type` of a file by it's extension

## Install
```bash
npm install mime-type-check
```

## Usage

```js
const getMimeType = require('mime-type-check');

getMimeType('./images/profile.svg');
//=> 'image/svg+xml'

getMimeType('https://rocktim.xyz/images/profile.svg');
//=> 'image/svg+xml'
```

## API

### getMimeType(string)

Get `MIME type` of a file by it's extension



## Support

<a href="https://www.buymeacoffee.com/7BdaxfI"><img src="https://user-images.githubusercontent.com/33410545/91206759-48d5d180-e725-11ea-93b5-754d98c007af.png" height="70px"/></a>
