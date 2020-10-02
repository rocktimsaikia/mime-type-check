/**
Get the MIME type of file by it's extension

@example
```
const getMimeType = require('mime-type-check');

getMimeType('./images/profile.svg');
//=> 'image/svg+xml'

getMimeType('https://rocktim.xyz/images/profile.svg');
//=> 'image/svg+xml'
```

*/

declare function _exports(string: string): string;
export = _exports;

