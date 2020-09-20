# Emoji Test List

## Description

This Node module returns a JSON-compatible object literal containing all emoji characters with their code, age, name, and component status or link to other fully-qualified or non-fully-qualified (minimally-qualified or unqualified) forms, as extracted from the Emoji 13.1 data file [emoji-test.txt](https://unicode.org/Public/emoji/13.1/emoji-test.txt).

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
const emojiTestList = require ('emoji-test-list');
console.log ("Total Emoji Count:", Object.keys (emojiTestList).length);
// -> Total Emoji Count: 4590
```

### Getting the count of keyboard (fully-qualified) emoji

```javascript
const emojiTestList = require ('emoji-test-list');
let keyboardCount = 0;
for (let emoji in emojiTestList)
{
    if (!emojiTestList[emoji].toFullyQualified) keyboardCount++;
}
console.log ("Keyboard Emoji Count:", keyboardCount);
// -> "Keyboard Emoji Count: 3512
```

### Getting the count of component emoji

```javascript
const emojiTestList = require ('emoji-test-list');
let componentCount = 0;
for (let emoji in emojiTestList)
{
    if (emojiTestList[emoji].isComponent) componentCount++;
}
console.log ("Component Emoji Count:", componentCount);
// -> "Component Emoji Count: 9
```

### Getting the name and code(s) of a given emoji

```javascript
const emojiTestList = require ('emoji-test-list');
const emoji = "👩‍❤️‍💋‍👨";
console.log ("Emoji:", emoji);
// -> Emoji: 👩‍❤️‍💋‍👨
console.log ("Name:", emojiTestList[emoji].name);
// -> Name: kiss: woman, man
console.log ("Code:", emojiTestList[emoji].code);
// -> Code: 1F469 200D 2764 FE0F 200D 1F48B 200D 1F468
```

## License

The MIT License (MIT).

Copyright © 2018-2020 Michel MARIANI.
