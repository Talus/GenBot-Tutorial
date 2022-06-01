const { Client, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES] });

const token = "NjIwNDA2MzY1MTQ3NjI3NTIz.XXaygw.klPIAqXszSjSVP3vJ6Qwe6riB9U";

client.once("ready", () => {
	console.log(`${client.user.tag} is now online!`);
	client.user.setActivity(`${client.guilds.size} Servers`, { type: "WATCHING" });
});

client.on("messageCreate", (msg) => {
	let setVar = new Set(), strArr = ["test1", "test2", "test3", "test4", "test5"].join('\n');
	Array.prototype.randItem = () => { return this[~~(Math.random()*this.length)] };
	
	if (!msg.guild || msg.author.bot) return;
	if (msg.content == "=test" && setVar.has(msg.author.id)) { msg.reply("Cooldown Message") } else {
		setVar.add(msg.author.id);
		setTimeout(() => setVar.delete(msg.author.id), 10000);
		msg.reply(strArr.randItem());
	}
});

client.login(token);
