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

//Bot Word List
const checkNome = [
  "bolsonaro",
  "mito",
  "messias",
  "presida",
  "17",
];

const checkApelido = [
  "bonoro",
  "biroliro"
  "biruleibe",
  
 ];

const checkJornalista = [ "?", ];
                         
const checkMiliciano = ["queiroz", "michele", "89 mil"];

const checkCorona = ["covid-19", "corona", "coronga", "coronavirus", "covid"];

const checkComunista = ["nós", "nosso", "estado", "dar",];


//Bot Replies
const replyNome = [
  "Chamou?",
  "Tem que ver isso ai, talkey?",
  "No tocante disso ai...",
  "Vou ver com o Paulo Guedes e te aviso",
  "Continua que eu chamo a Flordelis pra você, talkey?",
];

const replyCorona = [
  "Isso ai é so uma gripezinha...",
  "Robo não pega doença",
  "Esse virus chinês...",
  "Com meu histórico de atleta...",
  "Esse vírus é igual uma chuva, vai molhar 70% de vocês. Isso ninguém contesta. Toda a nação vai ficar livre da pandemia quando 70% for infectada e conseguir os anticorpos...",
  "E daí?",
  "Eu não sou COVEIRO!",
];

const replyCloroquina = [
  "Ih... Vou ter que ligar pro Trump pra pedir mais Cloroquina...",
  "CLOROQUINA NÃO TEM EFEITO COLATERAL, ESQUERDALHA!",
  "Opa! Se quiser usar contra Emas, garante não ser bicado, talkey?",
  "'Ah, não tem comprovação científica que seja eficaz.' Mas também não tem comprovação científica que não tem comprovação eficaz. Nem que não tem, nem que tem",
];

const replyJornalista = [
  "Vontade de encher sua boca de porrada!",
  "Virou Jornalista agora?"
  "É, parece que alguém tá querendo matéria pro Jornal Nacional...",
  "ACABÔ, PORRA!",
  ];

const replyMiliciano = ["Vontade de encher sua boca de porrada!"];

const replyComunista = ["Alá o comunistinha bostalhando... VAI PRA CUBA!!"];

const replyApelido = ["Vai dar apelido pro cu da sua mãe!"];

// Bot Checks:
Bot.on("message", (msg) => {
  if (msg.author.bot) return;

  checkNome.some((check) => {
    if (msg.content.toLowerCase().includes(check)) {
      msg.reply(replyNome[Math.floor(Math.random() * replyNome.length)]);
    }

    return;
  });// End CheckNome
  
  checkApelido.some((check) => {
    if (msg.content.toLowerCase().includes(check)) {
      msg.reply(replyApelido[Math.floor(Math.random() * replyApelido.length)]);
    }

    return;
  });// End checkComunista
  
  checkCorona.some((check) => {
    if (msg.content.toLowerCase().includes(check)) {
      msg.reply(replyCorona[Math.floor(Math.random() * replyCorona.length)]);
    }

    return;
  });// End checkCorona
  
  checkJornalista.some((check) => {
    if (msg.content.toLowerCase().includes(check)) {
      msg.reply(replyJornalista[Math.floor(Math.random() * replyJornalista.length)]);
    }

    return;
  });// End checkJornalista
  
  checkComunista.some((check) => {
    if (msg.content.toLowerCase().includes(check)) {
      msg.reply(replyComunista[Math.floor(Math.random() * replyComunista.length)]);
    }

    return;
  });// End checkComunista
  
  checkCloroquina.some((check) => {
    if (msg.content.toLowerCase().includes(check)) {
      msg.reply(replyCloroquina[Math.floor(Math.random() * replyCloroquina.length)]);
    }

    return;
  });// End checkComunista
  
  checkMiliciano.some((check) => {
    if (msg.content.toLowerCase().includes(check)) {
      msg.reply(replyMiliciano[Math.floor(Math.random() * replyMiliciano.length)]);
    }

    return;
  });// End checkComunista
  
  
  
  
}); // End Bot.on

