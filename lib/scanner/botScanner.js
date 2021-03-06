// botScanner.js
// =============

const source = require('rfr');

const { goodBotRegex, goodBotMessage } = source('lib/scanner/goodBot');
const { badBotRegex, badBotMessage } = source('lib/scanner/badBot');
const { spotifyTrackRegex, spotifyTrackMessage } = source('lib/scanner/spotify');

function scannerHandler(message) {
    if (goodBotRegex.test(message)) {
        goodBotMessage(message);
    } else if (badBotRegex.test(message)) {
        badBotMessage(message);
    } else if (spotifyTrackRegex.test(message)) {
        spotifyTrackMessage(message);
    }
}

exports.scannerHandler = scannerHandler;
