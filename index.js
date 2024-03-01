import 'dotenv/config'
import * as Discord from 'discord.js'; 
const client = new Discord.Client({intents: ['Guilds', Discord.GatewayIntentBits.GuildMessages, Discord.GatewayIntentBits.MessageContent]}); 

client.on("ready", () => { console.log(`Logged in as ${client.user.tag}!`) }) 

const prefix = "!";

client.on("messageCreate", function(message) {

  if (message.author.bot) return;

  const content = message.content;

  if (content.includes(process.env.TIKTOK_PREFIX)) {
    message.channel.send(
        `Hey ${message.author.toString() }, this looks like a tiktok. I fixed the embed for ya!  
${content.replace('tiktok', 'vxtiktok')}` );
console.log(`Successfully fixed tiktok ${content}`)
message.delete()
    
  }

  if (content.includes(process.env.TWITTER_PREFIX_SHORT) || content.includes(process.env.TWITTER_PREFIX_FULL)) {
    message.channel.send(
      `Hey ${message.author.toString() }, this looks like a tweet. I fixed the embed for ya!  
${content.replace('twitter', 'fxtwitter')}`);
    console.log(`Successfully fixed tweet ${content}`)
    message.delete()
  }

  if (content.includes(process.env.INSTA_PREFIX)) {
    message.channel.send(
      `Hey ${message.author.toString() }, this looks like it's from Insta. I fixed the embed for ya!  
${content.replace('instagram', 'ddinstagram')}`);
    console.log(`Successfully fixed insta ${content}`)
    message.delete()
  }
});
client.login(process.env.DISCORD_TOKEN);