const { Client, Collection } = require('discord.js')
const fs = require('fs')

const client = new Client();

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");

["aliases", "commands"].forEach(x => client[x] = new Collection());
["command", "event"].forEach(x => require(`./main/${x}`)(client))

client.on('ready', () => {
    console.log('APP - Ligado!')
})

client.login('TOKEN')
