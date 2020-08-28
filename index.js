const Discord = require("discord.js");
const dotenv = require("dotenv");

// Dictionaries requires
const wordDictionary = require("./dictionaries/Words_Dictionary.json");
const replyDictionary = require("./dictionaries/Reply_Dictionary.json");
const brabaDictionary = require("./dictionaries/Braba_Dictionary.json");

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
  const content = msg.content.toLowerCase();
  const ytUri = /(?:http(?:s)?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?v(?:i)?=|(?:embed|v|vi|user)\/))([^\?&\"'<> #]+)/gim;

  // Check if the author of the message is the bot itself
  if (msg.author.bot) return;

  // Switch Message Content:
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
      break;
    default:
      // Split the message:
      content.split(" ").some((sContent) => {
        // Check if youtube link
        if (sContent.match(ytUri)) return;

        for (const dict in wordDictionary) {
          if (wordDictionary.hasOwnProperty(dict)) {
            word = wordDictionary[`${dict}`];

            word.some((check) => {
              reply = replyDictionary[`${dict}`];
              if (sContent.includes(check))
                msg.reply(reply[Math.floor(Math.random() * reply.length)]);
            });
          }
        }
      }); // End Some Function
      break;
  } // End Switch Message Content
}); // End Bot.on
