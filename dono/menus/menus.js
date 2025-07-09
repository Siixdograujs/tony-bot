const fs = require("fs")
const chalk = require('chalk');

const menu = (prefix, NomeDoBot, NumeroDono, NomeDoDono, pushname) => {

return `
╭━━━〔 🤖 ${NomeDoBot} 〕━━━╮

📛 𝗜𝗡𝗙𝗢𝗦:
├─ 👤 Nome: ${pushname}
├─ 👑 Dono: ${NomeDoDono}
└─ 📱 Número do Dono: wa.me/${NumeroDono}

🛠️ 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 𝗗𝗢𝗡𝗢:
├─ ${prefix}fotomenu
├─ ${prefix}setprefix
├─ ${prefix}setnomebot
├─ ${prefix}setowner
└─ ${prefix}setownername

🎭 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦:
├─ ${prefix}s
├─ ${prefix}sgif
├─ ${prefix}f
├─ ${prefix}sticker
└─ ${prefix}figurinhas

📥 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗦:
├─ ${prefix}imgpralink
├─ ${prefix}metadinha
├─ ${prefix}pinterest
└─ ${prefix}play
└─ ${prefix}playvideo

🎨 𝗘𝗗𝗜𝗧𝗦 & 𝗘𝗙𝗘𝗜𝗧𝗢𝗦:
├─ ${prefix}glitch ┊ ${prefix}sandsummer
├─ ${prefix}write ┊ ${prefix}galaxywallpaper
├─ ${prefix}advancedglow ┊ ${prefix}1917
├─ ${prefix}typography ┊ ${prefix}makingneon
├─ ${prefix}pixelglitch ┊ ${prefix}royal
├─ ${prefix}neonglitch ┊  ${prefix}freecreate
├─ ${prefix}flag ┊ ${prefix}galax
├─ ${prefix}flag3d ┊ ${prefix}darkgreen
├─ ${prefix}deleting ┊ ${prefix}lighteffects 
├─ ${prefix}blackpink ┊  ${prefix}dragonball
├─ ${prefix}glowing ┊ ${prefix}neondevil
├─ ${prefix}underwater ┊ ${prefix}frozen
├─ ${prefix}logomaker ┊ ${prefix}wooden3d
├─ ${prefix}cartoon ┊ ${prefix}metal3d
├─ ${prefix}papercut ┊ ${prefix}ligatures
├─ ${prefix}watercolor ┊  ${prefix}3druby
├─ ${prefix}effectclouds ┊ ${prefix}sunset
├─ ${prefix}blackpinklogo ┊ ${prefix}cemetery
├─ ${prefix}gradient ┊ ${prefix}halloween
├─ ${prefix}summerbeach ┊ ${prefix}horror
├─ ${prefix}luxurygold ┊ ${prefix}blood
├─ ${prefix}multicoloredneon ┊ ${prefix}joker
╰━━━${NomeDoBot} ━━━━━━╯
`

}

module.exports = {  menu   }

let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.bold(`\n\n• O arquivo "${__filename}" foi atualizado.\n`));
delete require.cache[file]
require(file)
});