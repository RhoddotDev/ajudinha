const Discord = require("discord.js");

module.exports = {
    name:'help',
    aliases: ["ajuda", "cmds"],
    run: async (client, message, args) => {
    const Discord = require("discord.js")
    message.delete()

        let embed = new Discord.MessageEmbed()
        .setColor("#2E8B57")
        .setTitle("🐸 HelpZezão!")
        .setThumbnail("https://imgur.com/lDl8kGe.jpg")
        .setImage("https://imgur.com/8gKT3gy.jpg")
        .setDescription("**Use dos emojis para navegar no comando de help!**\n\n❮ 🍻 ❯ - **Diversão!**\n\n❮ 📚 ❯ - **Informativos!**\n\n❮ 📱 ❯ - **Social!**")
        .setFooter(`🎈 Solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({dynamic: true}))
        .setTimestamp()
    message.channel.send(embed).then(m => {
        m.react('🍻')
        m.react('📚')
        m.react('📱')

        const filter1 = (e, m) => e.emoji.name === '🍻' && m.id === message.author.id,
        coletor1 = m.createReactionCollector(filter1);
        const filter2 = (e, m) => e.emoji.name === '📚' && m.id === message.author.id,
        coletor2 = m.createReactionCollector(filter2);
        const filter3 = (e, m) => e.emoji.name === '📱' && m.id === message.author.id,
        coletor3 = m.createReactionCollector(filter3);

        coletor1.on('collect', em => {
            embed.setTitle("🍻 Diversão!")
            embed.setDescription("**Comandos abaixo;**\n\n**`beijar`**")
            em.users.remove(message.author.id)
            m.edit(embed)
        })

        coletor2.on('collect', em => {
            embed.setTitle("📚 Informativos!")
            embed.setDescription("**Comandos abaixo;**\n\n**`help`**, **`ping`**")
            em.users.remove(message.author.id)
            m.edit(embed)
        })

        coletor3.on('collect', em => {
            embed.setTitle("📱 Sociais!")
            embed.setDescription("**Redes Sociais do Zezão!**\n\n<:youtube:777598078546214912> [Youtube!](https://www.youtube.com/channel/UC1F6Vh7iRLSjPks3Xr8GjJA)\n<a:A_instagram:777598104215486484> [Instagram!](https://www.instagram.com/1zezao/)\n<:twitterlogo:777598077555965973> [Twitter!](https://twitter.com/1zezao)")
            em.users.remove(message.author.id)
            m.edit(embed)
        })
    })
    }
}
