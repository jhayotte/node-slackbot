/*jslint node: true */
'use strict';

var SlackBot = require('slackbots');
var env = require('node-env-file');

// Load all env
env('app.env');

// create a bot 
var bot = new SlackBot({
    token: process.env.API_NODE_BOT_TOKEN,
    name: 'nodejsbot'
});

/* Enable our bot to listen all messages and replies for some of them */
bot.on('message', function (message) {
    var params = {link_names: 1, as_user: true };

    if (IsChatMessage(message) &
        IsMentioningBotName(message)
    ) {
        Reply(message, params);
    }
});

function Reply(message, params) {
    console.log("Received: " + message.text);
    if (message.text.toLowerCase() === 'nodejsbot —help') {
        var response = "usage:\n " +
            "• botname --status \n ";
        bot.postMessage(message.channel, response, params);
    }

    if (message.text.toLowerCase() === "nodejsbot —status") {
        bot.postMessage(message.channel, "Up and running", params);
    }

    //You can add other method to call API for instance
}

function IsChatMessage(message) {
    return message.type === 'message' && Boolean(message.text)
}

function IsMentioningBotName(message) {
    if (typeof (message.text) != 'undefined' && message.text !== null) {
        return message.text.toLowerCase().indexOf(bot.name) > -1;
    }
    return false;
};