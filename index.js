const Discord = require("discord.js");
const dotenv = require("dotenv");

// Dictionaries requires
const wordDictionary = require("./dictionaries/Words_Dictionary.json");
const replyDictionary = require("./dictionaries/Reply_Dictionary.json");
const brabaDictionary = require("./dictionaries/Braba_Dictionary.json");
const badDictionary = require("././dictionaries/Bad_words.json");

// Bot Configuration:
const Bot = new Discord.Client();
dotenv.config();

Bot.login(process.env.BOT_KEY);

Bot.once("ready", () => {
  Bot.user.setActivity("Admirável Gado Novo -Zé Ramalho", {
    type: "LISTENING",
  });
});

// Bot Checks:
Bot.on("message", (msg) => {

   //Return true if word is literal or have any sub-string in himself
   let n_word = content.split(" ").some((w) => {
    return (
          // Strip the string and compare if the word is equal other 
            badDictionary.literal.find((k) => k === w) ||
          // Check if have word inside the string 
            badDictionary.like.find((k) => k.includes(k)));
  });

  if (msg.author.bot && !n_word) return;

  const content = msg.content.toLowerCase();

  switch (content) {
    case "lansa a braba bolsonaro":
      msg.channel.send(
        brabaDictionary[Math.floor(Math.random() * brabaDictionary.length)]
      );
      break;
    case "!help":
      msg.channel.send(
        "\n [lansa a braba bolsonaro]: Pede uma braba para o bolsonaro \n [!help]: Opções de ajuda para o bot \n Qualquer outro texto no dicionário o bot retornará uma mensagem \n"
      );
    default:
      for (const dict in wordDictionary) {
        if (wordDictionary.hasOwnProperty(dict)) {
          word = wordDictionary[`${dict}`];

          word.some((check) => {
            reply = replyDictionary[`${dict}`];
            if (content.includes(check))
              msg.reply(reply[Math.floor(Math.random() * reply.length)]);
          });
        }
      }
      break;
  }
}); // End Bot.on
