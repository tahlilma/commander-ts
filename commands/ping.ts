import { Message } from "discord.js";

module.exports = {
  name: "ping",
  alt: "p",
  description: "Replies with pong.",
  handler: (message: Message) => {
    message.reply("pong");
  },
};
