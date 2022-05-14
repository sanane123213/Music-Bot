module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'BLUE',
            author: { name: `İşte sizin için arama sonuçlarını${query}` },
            footer: { text: '💓 𝓐𝓼𝓽𝓻𝓪𝓵 𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓶𝓮𝓷𝓽 💓' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};