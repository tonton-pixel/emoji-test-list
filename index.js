//
const fs = require ('fs');
const path = require ('path');
//
// https://www.unicode.org/reports/tr51/
//
// Copy of https://unicode.org/Public/emoji/11.0/emoji-test.txt
//
function getEmojiList ()
{
    let result = { };
    let lines = fs.readFileSync (path.join (__dirname, 'data', 'emoji-test.txt'), { encoding: 'utf8' }).split ('\n');
    let lastFullyQualified = null;
    let relatedNonFullyQualified = [ ];
    for (let line of lines)
    {
        if ((line) && (line[0] !== '#'))
        {
            let hashOffset = line.indexOf ('#');
            let data = line.substring (0, hashOffset);
            let comment = line.substring (hashOffset + '#'.length);
            let fields = data.split (';');
            let codePoints = fields[0].trim ().split (' ');
            let status = fields[1].trim ();
            let emojiString = "";
            for (let codePoint of codePoints)
            {
                emojiString += String.fromCodePoint (parseInt (codePoint, 16));
            }
            let comments = comment.trim ().match (/^([^\s]+)\s+(.*)$/);
            if (comments)
            {
                if (comments[1] !== emojiString) console.log (`[${version}] Emoji mismatch:`, comments[1], emojiString);
                result[emojiString] =
                {
                    code: fields[0].trim (),
                    name: comments[2],
                };
                if (status === "fully-qualified")
                {
                    if (relatedNonFullyQualified.length > 0)
                    {
                        result[lastFullyQualified].toNonFullyQualified = relatedNonFullyQualified;
                    }
                    lastFullyQualified = emojiString;
                    relatedNonFullyQualified = [ ];
                }
                else if (status === "non-fully-qualified")
                {
                    if (comments[2] !== result[lastFullyQualified].name) console.log (`[${version}] Emoji mismatch:`, comments[2], result[lastFullyQualified].name);
                    result[emojiString].toFullyQualified = lastFullyQualified;
                    relatedNonFullyQualified.push (emojiString);
                }
            }
        }
    }
    return result;
}
//
module.exports = getEmojiList ();
//
