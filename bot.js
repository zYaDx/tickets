//ticket code

function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}




const setc = require("./setc.json")
const setrole = require("./setrole.json")
let tchannels  = [];
let current    = 0;

client.on("message", message => {
  let args = message.content.split(" ");
  if(message.content === prefix + 'mtickets')
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`${emojis.wrong}, **أنت لست من ادارة السيرفر لتنفيذ هذا الأمر.**`);
		if(args[1] && args[1].toLowerCase() === "enable") {
			mtickets = true;
			message.channel.send(`:white_check_mark:, **تم تفعيل التكتات , الاَن يمكن لأعضاء السيرفر استخدام امر انشاء التكت**`);
		} else if(args[1] && args[1].toLowerCase() === "disable") {
			mtickets = false;
			message.channel.send(`:white_check_mark:, **تم اغلاق نظام التكتات , الاَن لا يمكن لأي عضو استخدام هذا الأمر**`);
		} else if(!args[1]) {
			if(mtickets === true) {
			mtickets = false;
			message.channel.send(`:white_check_mark:, **تم اغلاق نظام التكتات , الاَن لا يمكن لأي عضو استخدام هذا الأمر**`);
			} else if(mtickets === false) {
			mtickets = true;
			message.channel.send(`:white_check_mark:, **تم تفعيل التكتات , الاَن يمكن لأعضاء السيرفر استخدام امر انشاء التكت**`);
			}
		}
})
*/

client.on("message", async message => {
   
	
  if (!message.content.startsWith(prefix) || message.author.bot) return;
	
	if(message.content.toLowerCase().startsWith(prefix + `setcategory`)){
    
	if(!setc[message.guild.id]) setc[message.guild.id] = {
    category: "Tickets"
}

		const category = setc[message.guild.id].category
		let newcategory = message.content.split(' ').slice(1).join(' ');
		let thiscategory = message.guild.categories.find('name', newcategory);
                let fltrc = message.guild.channels.filter(m => m.name === newcategory).type !== 'category';
 if(!setrole[message.guild.id]) setrole[message.guild.id] = {
    role: "Support Team"
}
    const role = setrole[message.guild.id].role
    const srole = setrole[message.guild.id].role
    let thisrole = message.member.roles.find("name", srole);
	 const d11x1xx = new Discord.RichEmbed()
     .setDescription(`:x: You do not have permission for that command! If you believe this is a mistake please add the role called \`\`${srole}\`\` to yourself.`)  
     .setColor(embedFail);
	if(!thisrole) return message.channel.send(d11x1xx);
     const NOTX1 = new Discord.RichEmbed()
     .setDescription(`:x: Usage: \`\`${prefix}setcategory <name>\`\``)  
     .setColor(embedFail);
	if(!newcategory) return message.channel.send(NOTX1);
		  const CANT = new Discord.RichEmbed()
     .setDescription(`:x: I can't find this category \`\`${newcategory}\`\``)  
     .setColor(embedFail);
		if(!thiscategory) return message.channel.send(CANT);
	const filtr = new Discord.RichEmbed()
     .setDescription(`:x: This not a category \`\`${newcategory}\`\``)  
     .setColor(embedFail);
		if(fltrc) return message.channel.send(filtr);
	  setc[message.guild.id].category = newcategory	
		  const D1 = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: The tickets category has been set to \`\`${newcategory}\`\``)  
     .setColor(embedSuccess);
	message.channel.send(D1);
		
	}
});


client.on("message", async message => {
		 
  if (!message.content.startsWith(prefix) || message.author.bot) return;
	
	if(message.content.toLowerCase().startsWith(prefix + `setrole`)){
    
	if(!setrole[message.guild.id]) setrole[message.guild.id] = {
    role: "Support Team"
}

		const role = setrole[message.guild.id].role
		let newrole = message.content.split(' ').slice(1).join(' ');
		let thisrole = message.guild.roles.find('name', newrole);
		let permission = message.guild.member(message.author).hasPermissions('ADMINISTRATOR');
		 const d11x1x42x = new Discord.RichEmbed()
     .setDescription(`:x: You do not have permission for that command! If you believe this is a mistake please add a high role has \`\`ADMINISTRATOR\`\` permission to yourself.`)  
     .setColor(embedFail);
     if(!permission) return message.channel.send(d11x1x42x);
     const NOTX1 = new Discord.RichEmbed()
     .setDescription(`:x: Usage: \`\`${prefix}setrole <name>\`\``)  
     .setColor(embedFail);
	if(!newrole) return message.channel.send(NOTX1);
		  const CANT = new Discord.RichEmbed()
     .setDescription(`:x: I can't find this role \`\`${newrole}\`\``)  
     .setColor(embedFail);
		if(!thisrole) return message.channel.send(CANT);
	  setrole[message.guild.id].role = newrole	
		  const D1 = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: The tickets role has been set to \`\`${newrole}\`\``)  
     .setColor(embedSuccess);
	message.channel.send(D1);
		
	}
});

client.on("message", async message => {
	 
  if (!message.content.startsWith(prefix) || message.author.bot) return;
if(message.content.toLowerCase().startsWith(prefix + `new`)) {
  if(!setc[message.guild.id]) setc[message.guild.id] = {
    category: "Tickets"
}

    const category = setc[message.guild.id].category
    const scategory = setc[message.guild.id].category
   let thiscategory = message.guild.channels.find('name', scategory);
 if(!setrole[message.guild.id]) setrole[message.guild.id] = {
    role: "Support Team"
}
    const role = setrole[message.guild.id].role
    const srole = setrole[message.guild.id].role
   let thisrole = message.guild.roles.find('name', srole);
   let subject = message.content.split(' ').slice(1).join(' '); 
  var numbers = [1, 2, 3, 4];
   //let ticketnumber = message.author.username
   current++;
	if(!subject[0]){
            
			     const rerole = new Discord.RichEmbed()
     .setDescription(`:x: Please first make a role called exactly \`\`${srole}\`\` | Or do \`\`.setrole rolename\`\``)  
     .setColor(embedFail);		    
        if (!thisrole) return message.channel.send(rerole);
	          const already = new Discord.RichEmbed()
     .setDescription(":x: You can only have \`\`1\`\` ticket in this server! you already have \`\`1\`\`")  
     .setColor("22BF41");
        message.guild.createChannel(`ticket-${current}`, "text").then(ticketx => {
		ticketx.setParent(thiscategory);
            let role = message.guild.roles.find("name", srole);
            let role2 = message.guild.roles.find("name", "@everyone");
            ticketx.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });   
            ticketx.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            ticketx.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true

            }); 
	
		
	    const d1 = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: Your ticket has been created <#${ticketx.id}>`)  
     .setColor(embedSuccess)
            message.channel.send(d1);
            const nonedear = new Discord.RichEmbed()
     .setDescription(`Dear ${message.author}, \n\nThank you for reaching out to our support team!\n\nWe will get back to you as soon as possible\n\n`) 
     .addField('Subject' , `No subject has been given`)
     .setColor(embedColor)
     .setFooter(`${client.user.username}` , client.user.avatarURL)
     .setTimestamp();
            ticketx.send({embed: nonedear });
        }).catch(console.error);

	}
	

  
 if(subject[0]){
            
 const rerole = new Discord.RichEmbed()
     .setDescription(`:x: Please first make a role called exactly \`\`${srole}\`\``)  
     .setColor(embedFail);		    
        if (!thisrole) return message.channel.send(rerole);
	          const already = new Discord.RichEmbed()
     .setDescription(":x: You can only have \`\`1\`\` ticket in this server! you already have \`\`1\`\`")  
     .setColor("22BF41");
        message.guild.createChannel(`ticket-${current}`, "text").then(ticketx => {
	       ticketx.setParent(thiscategory);
            let role = message.guild.roles.find("name", srole);
            let role2 = message.guild.roles.find("name", "@everyone");
            ticketx.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });   
            ticketx.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            ticketx.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true

            }); 
		
	    const d1 = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: Your ticket has been created <#${ticketx.id}>`)  
     .setColor(embedSuccess)
            message.channel.send(d1);
            const nonedear = new Discord.RichEmbed()
     .setDescription(`Dear ${message.author}, \n\nThank you for reaching out to our support team!\n\nWe will get back to you as soon as possible\n\n`) 
     .addField('Subject' , subject)
     .setColor(embedColor)
     .setFooter(`${client.user.username}` , client.user.avatarURL)
     .setTimestamp();
            ticketx.send({embed: nonedear });
        }).catch(console.error);

	  }  
}

if(message.content.toLowerCase().startsWith(prefix + `close`)) {	

	 const d11x1xx = new Discord.RichEmbed()
     .setDescription(":x: You do not have permission for that command! If you believe this is a mistake please add the role called \`\`● Élite » Team\`\` to yourself.")  
     .setColor(embedFail);
	
		 const d11x1xxNOT = new Discord.RichEmbed()
     .setDescription(":x: You only can run this command in a ticket channel!")  
     .setColor(embedFail);
	if (!message.channel.name.startsWith("ticket-")) return message.channel.send(d11x1xxNOT);
	 const yes = new Discord.RichEmbed()
     .setDescription(`:x: Are you sure you want close this ticket? The messages will be gone\nsend \`\`${prefix}close\`\` again to close the ticket.\nYour request will be voided in 20 seconds.`)  
     .setColor(embedColor);

    message.channel.send(yes)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '.close', {
        max: 1,
        time: 20000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        }) 
       .catch(() => {
	      const yesw = new Discord.RichEmbed()
     .setDescription(`:x: Ticket close timed out, the ticket was not closed.`)  
     .setColor(embedFail);
          m.edit(yesw).then(m2 => {
             m2.delete();
          }, 7000);
        });
    });
  }
  
});
                        
client.on('message', message => {
  if (message.content.toLowerCase().startsWith(prefix + `add`)) { 
    

    let noperm = new Discord.RichEmbed()
    .setColor(embedFail)
    .setDescription(":x: ليس لديك الصلاحيات الكافية");
    
    var perm = message.guild.member(message.author).hasPermissions('MANAGE_ROLES');
    if(!perm) return message.channel.send(noperm)
    if (!message.channel.name.startsWith(`ticket-`)) {
    const embed4 = new Discord.RichEmbed()
    .setColor(embedFail)
    .addField(`${client.user.username}`, `You can't use the this outside of a ticket channel.`)
    message.channel.send({ embed: embed4 });
    return
    }
    const nothere = new Discord.RichEmbed() 
    .setColor(embedFail)
    .addField(`${client.user.username}`, 'Please Mention a User Or Bot');
    
    let addedmember = message.mentions.members.first();
    if (!addedmember) return message.channel.send(nothere)
 
    message.channel.overwritePermissions(addedmember, { SEND_MESSAGES : true, VIEW_CHANNEL : true});
    const embed5 = new Discord.RichEmbed()
    .setColor(embedSuccess)
    .addField(`${client.user.username}`, '**' + addedmember + `** has been added to the ticket. Remove with [${prefix}remove]().`)
    message.channel.send({ embed: embed5 });

  }

  if (message.content.toLowerCase().startsWith(prefix + `remove`)) {
    

    let noperm = new Discord.RichEmbed()
    .setColor(embedFail)
    .setDescription(":x: ليس لديك الصلاحيات الكافية");
    
    var perm = message.guild.member(message.author).hasPermissions('MANAGE_ROLES');
    if(!perm) return message.channel.send(noperm)
    if (!message.channel.name.startsWith(`ticket-`)) {
    const embed6 = new Discord.RichEmbed()
    .setColor(embedFail)
    .addField(`${client.user.username}`, `You can't use the this outside of a ticket channel.`)
    message.channel.send({ embed: embed6 });
    return
    }
    const nothere = new Discord.RichEmbed() 
    .setColor(embedFail)
    .addField(`${client.user.username}`, 'Please Mention a User Or Bot');
    let removedmember = message.mentions.members.first();
    if (!removedmember) return message.channel.send(nothere)
 
    message.channel.overwritePermissions(removedmember, { SEND_MESSAGES : false, VIEW_CHANNEL : false});
    const embed7 = new Discord.RichEmbed()
    .setColor(embedSuccess)
    .addField(`${client.user.username}`, '**' + removedmember + '** has been removed from the ticket.')
    message.channel.send({ embed: embed7 });
  }
  
  if (message.content.toLowerCase().startsWith(prefix + `forceclose`)) {

    let noperm = new Discord.RichEmbed()
    .setColor(embedFail)
    .setDescription(":x: ليس لديك الصلاحيات الكافية");
    
    var perm = message.guild.member(message.author).hasPermissions('MANAGE_ROLES');
    if(!perm) return message.channel.send(noperm)
    
    if (!message.channel.name.startsWith(`ticket-`)) {
    const embed8 = new Discord.RichEmbed()
    .setColor(embedFail)
    .addField(`${client.user.username}`, `You can't use the this outside of a ticket channel.`)
    message.channel.send({ embed: embed8 });
    return
    }   
      else message.channel.delete()
    }
  
      if (message.content.toLowerCase().startsWith(prefix + `rename`)) {
        
        let noperm = new Discord.RichEmbed()
    .setColor(embedFail)
    .setDescription(":x: ليس لديك الصلاحيات الكافية");
    
    var perm = message.guild.member(message.author).hasPermissions('MANAGE_ROLES');
    if(!perm) return message.channel.send(noperm)
        var args = message.content.split(' ');
        if(!args[1]) return message.channel.send('**ااكتب اسم الروم الجديد**')
    if (!message.channel.name.startsWith(`ticket-`)) {
     
    const embed8 = new Discord.RichEmbed()
    .setColor(embedFail)
    .addField(`${client.user.username}`, `You can't use the this outside of a ticket channel.`)
    message.channel.send({ embed: embed8 });
    return
    }  
      else message.channel.setName(`ticket-${args[1]}`)
        var donere = new Discord.RichEmbed()
        .setColor(embedSuccess)
        .addField(`${client.user.username}`, `\`${args[1]}\` تم تغيير اسم الروم الى`)
      message.channel.send(donere)  
      }                    
  
})

client.on('message', message => {
 if(message.content === prefix + 'allclose')
   var iq = 0;
		for(let q = 0; q < tchannels.length; q++) {
			let c = message.guild.channels.get(tchannels[q]);
			if(c) {
				c.delete();
				tchannels.splice( tchannels[q], 1 );
				iq++;
			}
			if(q === tchannels.length - 1 || q === tchannels.lengh + 1) {
				message.channel.send(`:white_check_mark:, **تم مسح \`${iq}\` من التكتات.**`);
			}
		}
})

client.login(process.env.BOT_TOKEN);
