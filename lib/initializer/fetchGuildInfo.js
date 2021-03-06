// fetchGuildInfo.js
// =================

const source = require('rfr');

const logger = source('lib/utils/logger');

function fetchGuildInfo(client, guildID) {
    client.guilds.fetch(guildID)
        .then((guild) => logger.log(`Connected to server: ${guild.name}, id: ${guild.id}\nMember Count: ${guild.memberCount}`))
        .catch((e) => logger.log(`Error: encountered error when fetching guilds: ${e}`));
}

exports.fetchGuildInfo = fetchGuildInfo;
