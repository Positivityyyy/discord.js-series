const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = "++";
client.on("message", (message) => {
  // Exit and stop if it's not there

 if (!message.content.startsWith(prefix) || message.author.bot) return;
 const args = message.content.slice(prefix.length).split(' ');
const command = args.shift().toLowerCase();
   // [rest of the code]

  if (command === 'ping') {
    message.reply("Pong!");
  } else if ((command === 'invite') || (command === 'inv')) {
    message.delete(3000)
    message.channel.send("https://discord.gg/CPn7j3Q");
  } else if ((command === 'movie') || (command === 'm')) {
    message.delete(3000)
    if (!args.length) {
  		return message.channel.send(`Hey ${message.author}, you didn't provide any argument for the time of the movie brah XD Say something like *3:00AM* or *now*!`);
  	}
    else if (args[0] === 'now') {
     const embed = new Discord.RichEmbed()
        .setColor('#FFA500')
        .setTitle('Movie tonight!')
        .setURL('https://discordapp.com/channels/468195961995264002/571221915344044041')
        .setAuthor(`${message.guild.name}`, `${message.author.avatarURL}`, 'https://discordapp.com/channels/468195961995264002/571221915344044041')
        .setDescription('A movie night is going down __RIGHT NOW__! [__Click here__](https://discordapp.com/channels/468195961995264002/571221915344044041) once in the **Movie Room!** voice channel to join!')
        .setThumbnail('https://i.imgur.com/4zGi7HA.jpg');
        return message.channel.send({embed});
	}

  const embed = new Discord.RichEmbed()
    .setColor('#FFA500')
    .setTitle('Movie tonight!')
    .setURL('https://discordapp.com/channels/468195961995264002/571221915344044041')
    .setAuthor(`${message.guild.name}`, `${message.author.avatarURL}`, 'https://discordapp.com/channels/468195961995264002/571221915344044041')
    .setDescription('A movie night is going down tonight! [__Click here__](https://discordapp.com/channels/468195961995264002/571221915344044041) once in the **Movie Room!** voice channel to join!')
    .setThumbnail('https://i.imgur.com/4zGi7HA.jpg');
    message.channel.send({embed});

} else if ((command === 'serverinfo') || (command === 'si')) {
  message.delete(3000)
  message.channel.send('My message to react to.').then(sentMessage => {
	sentMessage.react('👍');
sentMessage.react('👎');
});
  
} else if ((command === 'help') || (command === 'h')) {
    message.delete(3000)
    const embed = new Discord.RichEmbed()
    .setColor('#FF0000')
    .setTitle('Help Menu')
    .setURL('https://discord.js.org/')
    .setAuthor('PosBot!', 'https://i.imgur.com/EQx0nDB.jpg', 'https://www.google.com/')
    .setDescription('Below lists all of the current PosBot commands and what they do; This list will continue to grow and capitalization is not neccessary to initiate any commands! Ask <@&468199936228458506> if you have any questions!')
    .setThumbnail('https://i.imgur.com/EQx0nDB.jpg')
    .addField('++Help(or H)', 'PosBot will provide you with this help menu!')
    .addField('++Invite(or Inv)', 'Posbot will provide you with an instant invite to share with others!')
    .addField('++ping', 'PosBot will respond to you with "pong" lmao not much else here XDD')
    .addField('++Movie(or M) [Time it will occur]', 'PosBot will instantly create an announcement for movie night at the Specified time!')
    .addField('++Serverinfo(or Si)', '[NOT IN SERVICE!] PosBot will send you the server information (in the form of clicking topics)!');
    message.channel.send({embed});
 } else if (command === 'ha') {
     message.delete(3000)
     if (message.member.roles.has("548004298332700682") || message.member.roles.has("506289149259546634")) {
     const embed = new Discord.RichEmbed()
     .setColor('#FF0000')
     .setTitle('Help Menu For Admins')
     .setURL('https://discord.js.org/')
     .setAuthor('PosBot!', 'https://i.imgur.com/EQx0nDB.jpg', 'https://www.google.com/')
     .setDescription('Below lists all of the current PosBot commands meant for members of <@&548004298332700682> **ONLY!** and should be used in channels not visible to regular members; This list will continue to grow and capitalization is not neccessary to initiate any commands! Ask <@&468199936228458506> if you have any questions!')
     .setThumbnail('https://i.imgur.com/EQx0nDB.jpg')
     .addField('++Pa [Team#1] , [Team#2] , [Time it will occur]' , 'PosBot will provide an announcement for the POWL match with the specified teams AND update all voicechannels!')
     .addField('++Pz' , 'PosBot will reset all P.O.W.L voicechannels to practice rooms!')
     .addField('++Invc [DiscordLink]', '[NOT IN SERVICE!] PosBot will provide this server with the new link specified, from here on out!')
     .addField('++Drive', 'PosBot will provide you with a link to the google drive!')
     .addField('++rr1', 'Will Iteration #1 of reaction roles to the specified channel!')


     message.channel.send({embed});
  }} else if (command === 'pa') {
 const args = message.content.slice((prefix.length)+(command.length)).split(',').map(elem => elem.trim());
 let[team1, team2, time] = args;
   message.delete(3000)
   if (message.member.roles.has("548004298332700682") || message.member.roles.has("506289149259546634")) {
   if (args.length < 3) {
     return message.channel.send(`Hey ${message.author}, you didn't provide any arguments for either the time of the game, or the teams competing!`);
   }
   const embed = new Discord.RichEmbed()
     .setColor('#8b0000')
     .setTitle(` __${team1}__ vs. __${team2}__!`)
     .setURL('https://www.twitch.tv/positiveoverwatchleague')
     .setAuthor(`${message.guild.name}`, `${message.author.avatarURL}`, 'https://www.twitch.tv/positiveoverwatchleague')
     .setDescription('P.O.W.L is going down today at the time below! [__Click here__](https://www.twitch.tv/positiveoverwatchleague) to view the stream once it begins!')
     .setThumbnail('https://imgur.com/Vl6SC1P.jpg');
     message.channel.send({embed});
     message.guild.channels.get("592210197251096582").setName(`${team1}`);
     message.guild.channels.get("592210230524248095").setName(`${team2}`);
     message.guild.channels.get("579445460734050304").setName("Commentator's Box");
 }}
 else if (command === 'pz') {
   message.delete(3000)
   if (message.member.roles.has("548004298332700682") || message.member.roles.has("506289149259546634")) {
    message.guild.channels.get("592210197251096582").setName("Practice Room #2!");
    message.guild.channels.get("592210230524248095").setName("Practice Room #3!");
    message.guild.channels.get("579445460734050304").setName("Practice Room #1!");
}} else if (command === 'drive') {
   message.delete(3000)
   if (message.member.roles.has("548004298332700682") || message.member.roles.has("506289149259546634")) {
    message.channel.send("https://drive.google.com/drive/folders/1dEIdLMwqyO096thIClGqPXZrP2OSO7zu?usp=sharing");
}} else if (command === 'rr1') {
    message.delete(3000)
    if (message.member.roles.has("548004298332700682") || message.member.roles.has("506289149259546634")) {
      const a = message.guild.roles.get('512492032497942549'); // Screenshot Channels
      const b = message.guild.roles.get('562113111495016484'); // P.O.W.L.
      const c = message.guild.roles.get('473984748289785882'); // Event Center!
  
      const filter = (reaction, user) => [':camera: ', ':powl: ', ':trophy: '].includes(reaction.emoji.name) 
       const embed = new Discord.RichEmbed()
       .setColor('#8b0000')
          .setTitle('Avaiilable Roles')
          .setDescription(`
          
          :camera:  ${a.toString()}
          :powl:  ${b.toString()}
          :trophy:  ${c.toString()}
          `);
          
          
      message.channel.send({embed}); 
    }}       
});
// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
