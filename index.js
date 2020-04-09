const Discord = require("discord.js");
const dotenv = require("dotenv");

const Bot = new Discord.Client();
dotenv.config();

Bot.login(process.env.BOT_KEY);

Bot.once("ready", () => {
  Bot.user.setActivity("Admirável Gado Novo -Zé Ramalho", {
    type: "LISTENING",
  });
});

const checkNome = [
  "bolsonaro",
  "bonoro",
  "biroliro",
  "mito",
  "messias",
  "presida",
  "17",
  "38",
];

const checkCorona = ["covid-19", "corona", "coronga", "coronavirus", "covid"];

const replyNome = [
  "O que você falou do mito?",
  "Tem que ver isso ai, talkey?",
  "No tocante disso ai...",
  "Vou ver com o Paulo Guedes e te aviso",
];

const replayCorona = [
  "Isso ai é so uma gripezinha...",
  "Robo não pega doença",
  "Esse virus chinês...",
  "Com meu histórico de atleta...",
  "Esse vírus é igual uma chuva, vai molhar 70% de vocês. Isso ninguém contesta. Toda a nação vai ficar livre da pandemia quando 70% for infectada e conseguir os anticorpos...",
];

Bot.on("message", (msg) => {
  if (msg.author.bot) return;

  checkNome.some((check) => {
    if (msg.content.toLowerCase().includes(check)) {
      msg.reply(replyNome[Math.floor(Math.random() * replyNome.length)]);
    }

    return;
  });
});

Bot.on("message", (msg) => {
  if (msg.author.bot) return;

  checkCorona.some((check) => {
    if (msg.content.toLowerCase().includes(check)) {
      msg.reply(replayCorona[Math.floor(Math.random() * replayCorona.length)]);
    }

    return;
  });
});
