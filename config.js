
// - Ubah nomor owner dan wm di sini.
// + Daftar apikey terlebih dahulu sebelum menggunakan svript ini link
//https://api.betabotz.org
//https://api.botcahx.live
// - Jika sudah mendaftar salin key yang ada di profie dan paste di global.lann && global.btc
// - Contoh global.btc = 'ngaksk?'//register di https://api.botcahx.live
// - Contoh global.lann = 'Ntahla' //register key di https://api.betabotz.org
// - Jika sudah maka lanjutkan untuk mengubah nomor owner dan wm.


// List Key 
// Betabotz = digunakan hampir di semua fitur kecuali linkshort
// Botcahx  = digunakan untuk linkshort saja

global.owner = ['6285786539008']  
global.mods = ['6285786539008'] 
global.prems = ['6285786539008']
global.nameowner = 'Fahrul'
global.numberowner = '6285786539008' 
global.mail = 'rakrohaku@gmail.com' 
global.dana = '6285786539008'
global.pulsa = '6285786539008'
global.gopay = '6285786539008'
global.namebot = 'BETABOTZ-MD'
global.gc = 'https://chat.whatsapp.com/HZ0XzL2hYl5EtKgz15Qdfv'
global.web = 'https://github.com/Fahrul6868'
global.instagram = 'https://instagram.com/fahrul_mt'
global.wm = 'Beta BOT-MD'
global.watermark = wm
global.wm2 = '⫹⫺ Beta Bot'
global.wm3 = '© Fahrul'
global.wm4 = 'made by FAHRUL-MD'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made with'
global.author = 'Bot WhatsApp By Fahrul'

//---- image thumbnail 
global.thumb = 'https://telegra.ph/file/ec75e8bd53238f11603d9.jpg'

//===> Apikey
global.lann = 'chuDEfcB' //isi apikey mu https://api.betabotz.org
global.btc = 'xPQzgABf'//Isi apikey di https://api.botcahx.live
global.APIs = {   
  lann: 'https://api.betabotz.org',
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.betabotz.org': 'chuDEfcB' //isi apikey mu https://api.betabotz.org
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
