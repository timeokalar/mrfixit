import 'dotenv/config'
import * as Discord from 'discord.js';
import PREFIXES from './constants.js';

const client = new Discord.Client({intents: ['Guilds', Discord.GatewayIntentBits.GuildMessages, Discord.GatewayIntentBits.MessageContent]}); 

client.on("ready", () => { console.log(`Logged in as ${client.user.tag}!`) }) 

const prefix = "!";

client.on("messageCreate", function(message) {
  if (message.author.bot) return;

  const content = message.content;

  if (content.includes(PREFIXES.TIKTOK)) {
    message.channel.send(
        `Hey ${message.author.toString() }, that looks like a tiktok. I fixed the embed for ya!  
${content.replace('tiktok', 'vxtiktok')}` );
console.log(`Successfully fixed tiktok ${content}`)

    
  }

  if (content.includes(PREFIXES.TWITTER_FULL) || content.includes(PREFIXES.TWITTER_SHORT)) {
    message.channel.send(
      `Hey ${message.author.toString() }, that looks like a tweet. I fixed the embed for ya!  
${content.replace('twitter', 'fxtwitter')}`);
    console.log(`Successfully fixed tweet ${content}`)
    
  }

  if (content.includes(PREFIXES.INSTA) && message.embeds.length > 0 && !message.embeds[0].data.image) {
    message.channel.send(
      `Hey ${message.author.toString() }, that looks like it's from Insta. I fixed the embed for ya!  
${content.replace('instagram', 'ddinstagram')}`);
    console.log(`Successfully fixed insta ${content}`)
    
  }
});
client.login(process.env.DISCORD_TOKEN);