/**
Check all the available `MIME types` of an extension.

@param extension - The file extension to look up. A leading dot, surrounding whitespace and casing are all normalized, so `path.extname()` output works as-is.
@returns Every MIME type registered for that extension, sorted alphabetically, or an empty array if none match.
@throws `TypeError` if `extension` is not a string.

@example
```
import mimeTypeCheck from 'mime-type-check';

mimeTypeCheck('svg'); //=> ['image/svg+xml']
mimeTypeCheck('png'); //=> ['image/png']
mimeTypeCheck('3gpp'); //=> ['audio/3gpp', 'video/3gpp']
mimeTypeCheck('nope'); //=> []
```
*/
export default function mimeTypeCheck(extension: string): string[];
