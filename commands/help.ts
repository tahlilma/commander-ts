import { Message } from "discord.js";

require("dotenv").config();
const Discord = require("discord.js");
const fs = require("fs");

interface Meta {
  name: string;
  alt: string;
  description: string;
  handler?: Function;
}

module.exports = {
  name: "help",
  alt: "h",
  description: "Shows this menu.",
  handler: (message: Message) => {
    const files = fs
      .readdirSync("./build")
      .map((item: string) => item.split(".")[0]);
    const meta = files.map((name: string) => require(`../build/${name}`));

    const fields = meta.map((item: Meta) => {
      return {
        name: `${item.name} (${item.alt})`,
        value: `> ${item.description}`,
      };
    });

    const helpEmbed = new Discord.MessageEmbed({
      color: "RANDOM",
      title: "HELP MENU",
      description:
        "```If you want to change this description check the ./build/help.ts file.```", // change this to what you want
      fields: fields,
      footer: {
        text: `Server Prefix: ${process.env.PREFIX}`,
      },
    });

    message.channel.send({ embeds: [helpEmbed] });
  },
};
