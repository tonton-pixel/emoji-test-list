# Emoji Test List

## Description

This NPM module returns a JSON-compatible object literal containing all emoji characters with their code, name and link to other fully-qualified or non-fully-qualified forms, as extracted from the Unicode data file `emoji-test.txt`.

Please note that the following emoji characters are omitted, as mentioned in the data file header:

- 12 keycap bases: number sign '#', asterisk '*', digits '0' to '9'
- 26 singleton regional indicators: '🇦' to '🇿'

## Installing

Switch to your *project* directory (`cd`) then run:

```bash
npm install emoji-test-list
```

## Testing

A basic test can be performed by running the following command line from the *package* directory:

```bash
npm test
```

## Examples

### Getting the total count of emoji

```javascript
const emojiList = require ('emoji-test-list');
console.log ("Total Emoji Count:", Object.keys (emojiList).length);
// -> Total Emoji Count: 3570
```

### Getting the count of keyboard (fully-qualified) emoji

```javascript
const emojiList = require ('emoji-test-list');
let keyboardCount = 0;
for (let emoji in emojiList)
{
    if (!emojiList[emoji].toFullyQualified) keyboardCount++;
}
console.log ("Keyboard Emoji Count:", keyboardCount);
// -> "Keyboard Emoji Count: 2789
```

## License

The MIT License (MIT).

Copyright © 2018 Michel MARIANI.
