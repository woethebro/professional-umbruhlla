// Ping Module
module.exports = {
    // Name of Command
    name: 'ping',
    // Description of Command
    description: 'Ping!',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 1,
    // Execute Command - Parameters: message
    execute(message) {
        // Send Message
        message.channel.send('king kong!');
    },
};