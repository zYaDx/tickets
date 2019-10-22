client.on('message', message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + 'new')) {
  if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**Error** :octagonal_sign:\nI Don\'t have MANAGE_CHANNELS Permission`)
 let log = message.guild.channels.find("name", "log");
 let args = message.content.split(' ').slice(1).join(' ');
 let support = message.guild.roles.find("name","Support Team");
 let ticketsStation = message.guild.channels.find("name", "TICKETS");
 let reason = message.content.split(" ").slice(1).join(" ");
 if(!reason) reason = 'NONE';
 const embed = new Discord.RichEmbed()
 .setColor("#36393e")
 .addField(`**Error :interrobang:**`, `This server doesn't have a \`Support Team\` role made so the ticket won't be opened.`)
 .setTimestamp();
 if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send({ embed: embed });
 if(message.guild.channels.exists("name", `ticket-${message.author.username}`)) return message.channel.send(`You already have a ticket open :no_entry:`);
 if(!ticketsStation) return message.channel.send(`**Error! **:interrobang:\n please create \`category\` Called \`TICKETS\``)
 message.guild.createChannel(`ticket-` + message.author.username, "text").then(c => {
 c.setParent(ticketsStation);
 const done = new Discord.RichEmbed()
 .setColor(`GREEN`)
 .setTitle(`Ticket Created`)
 .setDescription(`Ticket : #${c.name}
 by :<@${message.author.id}>
 Reason : ${reason}`)
 .setTimestamp()
 .setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033107635208193/563111847692337174.png`)
 .setFooter(message.author.tag)
 if(log) log.send(done)
 let role = message.guild.roles.find("name", "Support Team");
 let role2 = message.guild.roles.find("name", "@everyone");
 c.overwritePermissions(role, {
 SEND_MESSAGES: true,
 READ_MESSAGES: true
 });
 c.overwritePermissions(role2, {
 SEND_MESSAGES: false,
 READ_MESSAGES: false
 });
               c.overwritePermissions(message.author, {
                   SEND_MESSAGES: true,
                   READ_MESSAGES: true
               });
 
               /////////////
 const eembed = new Discord.RichEmbed()
 .setColor("#00ffd4")
 //.setThumbnail(message.author.avatarURL)
 .addField(`Your ticket has been created :white_check_mark:`, `<#${c.id}>`)
 .setFooter(`${client.user.tag} BY | ${dev_tag}`,client.user.displayAvatarURL);
 //////////////////
 message.channel.send({ embed: eembed });
 const embed = new Discord.RichEmbed()
 .setColor(0xCF40FA)
 .setThumbnail(message.author.avatarURL)
 .addField(`**Welcome**`, `<@${message.author.id}>`)
 .addField(`Our **__Support Team__** will be here soon to help.`, `** **`)
 .addField(`Reason :`, `${reason}`)
 .setFooter(`${client.user.tag} BY | ${dev_tag}`,client.user.displayAvatarURL)
 .setTimestamp();
 c.send({ embed: embed }).then
 c.send(`<@${message.author.id}>`).then(b=>{
   b.delete();
 })
 }) .catch();
   }
   if(message.content.startsWith(prefix + 'close')) {
      
     if(message.author.bot) return;
       if(!message.channel.name.startsWith("ticket-")) return message.channel.send(`this command only for the tickets`)
 let close = new Discord.RichEmbed()
 .addField(`type \`${prefix}close\` again to confirm`, `** **`)
 .setColor("#36393e");
 message.channel.sendEmbed(close) .then(m => {
 const filter = msg => msg.content.startsWith(prefix + 'close');
 if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return
 message.channel.awaitMessages(response => response.content === prefix + 'close', {
 max: 1,
 time: 20000,
 errors: ['time']
 })
 .then((collect) => {
 message.channel.delete();
 let Reason = message.content.split(" ").slice(1).join(" ");
 if(!Reason) Reason = 'NONE';
let closee = new Discord.RichEmbed()
.setColor(`BLUE`)
.setAuthor(`Ticket Closed`)
.setDescription(`Ticket : #${message.channel.name}
By : <@${message.author.id}>
Reason : ${Reason}`)
.setTimestamp()
.setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033109178712074/563111850162520077.png`)
.setFooter(message.author.tag)
let log = message.guild.channels.find("name", "log");
if(log) log.send(closee)
 }) .catch(() => {
 m.delete()
 .then(message.channel.send('Ticket close timed out, the ticket was not closed')) .then((c) => {
 c.delete(4000);
 }) 
 })
 })     
   } if(message.content.startsWith(prefix + `multiclose`)) {
     if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**Error** :octagonal_sign:\nI Don\'t have MANAGE_CHANNELS Permission`)
     if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('You don\'t have Permission **MANAGE_CHANNELS** to close all tickets');
      message.guild.channels.filter(c => c.name.toLowerCase().startsWith("ticket-")).forEach(channel => { channel.delete(); })
const ttt = new Discord.RichEmbed()
.setColor("GREEN")
.addField(`**Done all Tickets has been closed :white_check_mark:**`,`** **`)
message.channel.send(ttt)
let log = message.guild.channels.find("name", "log");
const rr = new Discord.RichEmbed()
.setColor("GREEN")
.addField(`**all Tickets channels has been closed :white_check_mark:**`, `**by <@${message.author.id}>**`)
.setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588151961279397898/582096914376425501.png`)
.setTimestamp();
if(log) return log.send(rr)
//
} if(message.content.startsWith(prefix + `add`)) {
  if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**Error** :octagonal_sign:\nI Don\'t have MANAGE_CHANNELS Permission to do this`)
 if(!message.channel.name.startsWith("ticket-")) return message.channel.send(`this command only for the tickets`);
let member = message.mentions.members.first();
if(!member) return message.channel.send(`**Please mention the user :x:**`);
if(message.channel.permissionsFor(member).has(['SEND_MESSAGES', 'VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'])) return message.channel.send(`this member already in this ticket :rolling_eyes:`);
message.channel.overwritePermissions(member.id, { SEND_MESSAGES: true, VIEW_CHANNEL: true, READ_MESSAGE_HISTORY: true });
message.channel.send(`**Done :white_check_mark:\nSuccessfully added <@${member.user.id}> to the ticket**`)
let tgt = new Discord.RichEmbed()
.setColor(`GREEN`)
.setAuthor(`Added member to a ticket`)
.setDescription(`Ticket : #${message.channel.name}
Member : ${member}
by : <@${message.author.id}>`)
.setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033109539160066/563111851165220885.png`)
.setTimestamp();
let log = message.guild.channels.find("name", "log");
if(log) return log.send(tgt);
} if(message.content.startsWith(prefix + `remove`)) {
 if(!message.channel.name.startsWith("ticket-")) {
     return message.channel.send(`this command only for the tickets`);
 }
 let member = message.mentions.members.first();
 if(!member || member.id === client.user.id) {
     return message.channel.send(`**Please mention the user :x:**`);
 }
 if(!message.channel.permissionsFor(member).has(['SEND_MESSAGES', 'VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'])) {
     return message.channel.send(`:x: **${member.user.tag}** is not in this ticket to remove them`);
 }
 message.channel.overwritePermissions(member.id, { SEND_MESSAGES: false, VIEW_CHANNEL: false, READ_MESSAGE_HISTORY: false });
 message.channel.send(`**Done :white_check_mark:\nSuccessfully removed \`${member.user.tag}\` from the ticket**`)
 let gtg = new Discord.RichEmbed()
.setColor(`BLUE`)
.setAuthor(`removed member from a ticket`)
.setDescription(`Ticket : #${message.channel.name}
Member : ${member}
by : <@${message.author.id}>`)
.setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033111212949555/563111852352077886.png`)
.setTimestamp();
let log = message.guild.channels.find("name", "log");
if(log) return log.send(gtg);
 }
 
 });
 
 
 
 
client.login(process.env.BOT_TOKEN);
