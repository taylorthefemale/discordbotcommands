    module.exports = {
        name: 'yo',
        description: 'Yo!',
        cooldown: 5,
        execute(message) {
            message.channel.send('This is not no hood server, fix your syntax!');
        },
    };
