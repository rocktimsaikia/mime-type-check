/**
Check the all the available `MIME types` of a extension.

@example
```
const getMimeType = require('mime-type-check');

getMimeType('svg'); //=> ['image/svg+xml']
getMimeType('png'); //=> ['image/png']
getMimeType('3gpp') //=> ['audio/3gpp', 'video/3gpp']
```

*/

declare function _exports(string: string): string;
export = _exports;

