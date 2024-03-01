import 'dotenv/config'
import * as Discord from 'discord.js'; 
const client = new Discord.Client({intents: ['Guilds', Discord.GatewayIntentBits.GuildMessages, Discord.GatewayIntentBits.MessageContent]}); 

client.on("ready", () => { console.log(`Logged in as ${client.user.tag}!`) }) 

const prefix = "!";

client.on("messageCreate", function(message) {

  if (message.author.bot) return;

  const content = message.content;

  if (content.includes(process.env.TIKTOK_PREFIX)) {
    message.reply(
        `This looks like a tiktok. Here's the fixed embed!  
${content.replace('tiktok', 'vxtiktok')}`);
console.log(`Successfully fixed tiktok ${content}`)
    
  }

  if (content.includes(process.env.TWITTER_PREFIX_SHORT) || content.includes(process.env.TWITTER_PREFIX_FULL)) {
    message.reply(
        `This looks like tweet. Here's the fixed embed!  
${content.replace('twitter', 'fxtwitter')}`);
    console.log(`Successfully fixed tweet ${content}`)
  }

  if (content.includes(process.env.INSTA_PREFIX)) {
    message.reply(
        `This looks like it's from Instagram. Here's the fixed embed!  
${content.replace('instagram', 'ddinstagram')}`);
    console.log(`Successfully fixed insta ${content}`)
  }
});
client.login(process.env.DISCORD_TOKEN);