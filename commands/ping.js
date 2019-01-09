const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

message.channel.send("Pong! From Handler")


}

module.exports.help = {
 name: "ping"
}
