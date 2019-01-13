var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var mtg = require('mtgtop8');
var eventParser = require('./eventparser.js');
// Configure logger settings
// logger.remove(logger.transports.Console);
// logger.add(new logger.transports.Console, {
//     colorize: true
// });
// logger.level = 'debug';
// // Initialize Discord Bot
// var bot = new Discord.Client({
//    token: auth.token,
//    autorun: true
// });
// bot.on('ready', function (evt) {
//     logger.info('Connected');
//     logger.info('Logged in as: ');
//     logger.info(bot.username + ' - (' + bot.id + ')');
// });
// bot.on('message', function (user, userID, channelID, message, evt) {
//     if (message.substring(0, 1) == '!') {
//         var args = message.substring(1).split(' ');
//         var cmd = args[0];       
//         args = args.splice(1);
//         switch(cmd) {
//             // !ping
//             case 'modern':
//                 //Get Data For Modern Tournaments
//                 mtg.modernEvents(1,function(error, modernEvents){
//                     if(error){
//                         bot.sendMessage({
//                             to: channelID,
//                             message: error.message
//                         })
//                     }

//                     var modernMetaPercentage = eventParser.parseDeckPercentage(JSON.Parse(modernEvents));
//                     bot.sendMessage({
//                         to: channelID,
//                         message: 'Modern meta percentage'
//                     })
//                 })
//                 bot.sendMessage({
//                     to: channelID,
//                     message: 'Pong!'
//                 });
//                 break;
//             case 'standard':
//                 //Get Data for Standard Tournaments
//                 break;
//             case 'legacy':
//                 //Get Data for Legacy Tournaments
//                 break;          
//          }
//      }
// });



var modernMeta = function(){
    mtg.modernEvents(1, function(error, modernEvents){
        var modernMetaPercentage = eventParser.parseDeckPercentage(modernEvents);
    })
}

modernMeta();