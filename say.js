const { MessageEmbed } = require("discord.js")

module.exports = {
    name:'say',
    aliases: ['sayembed', 'falar'],
    run: async (client, message, args) => {
        message.delete();
        
        let roleColor = message.guild.me.displayHexColor;

        if(!args[0]) {
            return message.channel.send(message.author,
                new MessageEmbed()
                .setColor("#f63a3a")
                .setDescription('<:incorrect:779133363386581012> | Você não colocou **nada** na frente do comando!\n\nUtilize:```$$say embed * content *``` Ou: ```$$say * content *```')
            )
        } else if(args[0].toLowerCase() === "embed") {
            return message.channel.send(
                new MessageEmbed()
                .setColor(roleColor === "#ffffff" ? "#000000" : roleColor)
                .setDescription(args.slice(1).join(" "))
                .setTimestamp()
                .setFooter(`🎈 Solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({dynamic: true}))
            )
        } else {
            message.channel.send(args.join(" "));
        }
    }
}
