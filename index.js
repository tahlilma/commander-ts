const Discord = require("discord.js");
require("dotenv").config();

// Any special functionality you wish to add goes here. Example: Backend Counter

const commandHandler = require("./commandHandler");

const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`Bot logged in as ${client.user.tag}`);
  client.user.setActivity(`Use ${process.env.PREFIX}help`);
});

client.on("messageCreate", (message) => {
  if (message.author.id === client.user.id) return;
  commandHandler(message);
});

client.login(process.env.TOKEN);
