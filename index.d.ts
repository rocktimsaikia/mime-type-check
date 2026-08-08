/**
Check all the available `MIME types` of an extension.

@param extension - The file extension to look up, without a leading dot. Surrounding whitespace and casing are normalized.
@returns Every MIME type registered for that extension.
@throws If `extension` is not a string, or no MIME type matches it.

@example
```
import mimeTypeCheck from 'mime-type-check';

mimeTypeCheck('svg'); //=> ['image/svg+xml']
mimeTypeCheck('png'); //=> ['image/png']
mimeTypeCheck('3gpp'); //=> ['audio/3gpp', 'video/3gpp']
```
*/
export default function mimeTypeCheck(extension: string): string[];
