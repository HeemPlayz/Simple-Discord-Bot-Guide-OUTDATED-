const Discord = require("discord.js") //If you don't Put it all codes then will be wrong

const client = new Discord.Client()

const prefix = "-"; //You can change it to whatever you want

client.on('message', message => {
if (message.content === `${prefix}ping`)
message.channel.send("Pong")
console.log(`Run By ${message.author,tag}`)

})

client.login("Token") // Put you Bot Token or just replace it By process.env.BOT_TOKEN and Delete ""
