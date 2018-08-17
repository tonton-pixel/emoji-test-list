const emojiTestList = require ('.');
//
let keyboardCount = 0;
for (let emoji in emojiTestList)
{
    if (!emojiTestList[emoji].toFullyQualified) keyboardCount++;
}
console.log ("Keyboard Emoji Count:", keyboardCount);
console.log ("Total Emoji Count:", Object.keys (emojiTestList).length);
console.log ();
//
