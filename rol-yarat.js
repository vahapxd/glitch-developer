exports.run = async (client, message, args, level) => {
    try {
      if (!args[0]) return message.reply('Lütfen Rol Adını Yazınız!')
      if (!args[1]) return message.reply('Lütfen bir renk kodu girin!')

 message.guild.roles.create({
  data: {
    name: args[0],
    color: args[1]
  }
})
message.reply('oluşturuldu')
} catch {
message.reply('Bir hata oluştu!')
}
  }

  
  exports.conf = {
    enabled: true,
    aliases: ['rol'],
    guildOnly: true,
    permLevel: '4'
  }
  
  exports.help = {
    name: 'rololuştur',
    description: 'sunucuda rol oluşturur.',
    usage: 'rololuştur <name>'
  } 