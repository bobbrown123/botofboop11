const Discord = require("discord.js")
defined discord! 
module.exports = (client, member, message) => {
  const byeChannel = member.guild.channels.find('name', 'welcome');
  if (byeChannel) {
    let byeEmbed = new Discord.RichEmbed()
    .setTitle("Member has left!")
    .setThumbnail(member.user.displayAvatarURL)
    .setDescription(`Bye ${member.user}, Seeya next time!`)
    .setColor("#4286f4")
    .setFooter(`We now have ${member.guild.memberCount} members!`)
    .setTimestamp();
    byeChannel.send(byeEmbed)
  }
}
