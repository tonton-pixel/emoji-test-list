const emojiTestList = require ('.');
//
let componentCount = 0;
let keyboardCount = 0;
for (let emoji in emojiTestList)
{
    if (emojiTestList[emoji].isComponent)
    {
        componentCount++;
    }
    else if (!emojiTestList[emoji].toFullyQualified)
    {
        keyboardCount++;
    }
}
console.log ("Keyboard Emoji Count:", keyboardCount);
console.log ("Component Emoji Count:", componentCount);
console.log ("Total Emoji Count:", Object.keys (emojiTestList).length);
console.log ();
//
