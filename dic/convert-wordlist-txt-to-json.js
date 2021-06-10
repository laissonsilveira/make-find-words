const { createReadStream, writeFileSync } = require('fs');
const { createInterface } = require('readline');

const wordsBySize = new Map();

async function processLineByLine() {
    const fileStream = createReadStream('br-utf8.txt');

    const rl = createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    for await (const line of rl) {
        if (wordsBySize.has(line.length)) {
            wordsBySize.get(line.length).push(line)
        } else {
            wordsBySize.set(line.length, [line]);
        }
    }

    for (const size of wordsBySize.keys()) {
        writeFileSync(`${size}.json`, JSON.stringify(wordsBySize.get(size)));
    }
}

processLineByLine();