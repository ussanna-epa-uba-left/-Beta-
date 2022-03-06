/* coded by sisula welgamage
2021

const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('cyber-queen-web-api');
const axios = require('axios');
//language
const Language = require('../language');
const Lang = Language.getString('wallpaper');

if (Config.WORKTYPE == 'private') {
Asena.addCommand({pattern: 'spack', fromMe: true, desc: Lang.TET_DESC}, (async (message, match) => {
    const msg ='   ┏━━━━━°❀❀°━━━━━┓\n   ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴇᴇɴᬐ LOGO PACK\n   ┗━━━━━°❀❀°━━━━━┛' + '\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'metalic' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.metalic CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'romantic' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.romantic CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'burnp' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.burnp CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ccup' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ccup CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cofee' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cofee CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'grass' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.grass CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'hwood' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.hwood CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bwood' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bwood CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'summer' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.summer CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'nature' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.nature CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'uwater' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.uwater CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'nsummer ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.nsummer CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ufall' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ufall CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'geon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.geon  CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'nsky ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.nsky  CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ucube' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ucube CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fur' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fur CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'crisp' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.crisp CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'embro ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.embro CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'uweb' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.uweb  CyberQueen/1-5 num' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'gleave ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.gleave CyberQueen/1-5 num' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bfly' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bfly CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'zwood' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.zwood  CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'nlight' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.nlight CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'scary' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.scary  CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'blwood ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.blwood CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'xtrypo' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.xtrypo CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'uflower ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.uflower  CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'flower' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.flower CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'partyneon ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.partyneon  CyberQueen/1-5 num' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'dmetal' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.dmetal CyberQueen/1-5 num' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ubeach ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ubeach  CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'zwater ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.zwater CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'turi ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.turi  CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'gocs   ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.gocs    CyberQueen/1-5 num' + ']\n\n' +
            '⚠️අවසානෙට ඉලක්කම් දාන්න තියන command වල ඉලක්කම අනිවාරෙන් දාන්න background වෙනස් වෙනව ඒකෙන්...' + '\n\n' +
            '   ┏━━━━━°❀❀°━━━━━┓\n   ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴇᴇɴᬐ LOGO PACK\n   ┗━━━━━°❀❀°━━━━━┛' + '\n'            

    var logoimg = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (logoimg.data), MessageType.image, {mimetype: Mimetype.png, caption: msg }) 
 }));
}
if (Config.WORKTYPE == 'public') {
Asena.addCommand({pattern: 'spack', fromMe: true, desc: Lang.TET_DESC, dontAddCommandList: true}, (async (message, match) => {
    const msg ='   ┏━━━━━°❀❀°━━━━━┓\n   ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴇᴇɴᬐ LOGO PACK\n   ┗━━━━━°❀❀°━━━━━┛' + '\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'metalic' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.metalic CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'romantic' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.romantic CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'burnp' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.burnp CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ccup' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ccup CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cofee' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cofee CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'grass' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.grass CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'hwood' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.hwood CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bwood' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bwood CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'summer' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.summer CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'nature' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.nature CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'uwater' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.uwater CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'nsummer ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.nsummer CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ufall' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ufall CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'geon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.geon  CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'nsky ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.nsky  CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ucube' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ucube CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fur' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fur CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'crisp' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.crisp CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'embro ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.embro CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'uweb' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.uweb  CyberQueen/1-5 num' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'gleave ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.gleave CyberQueen/1-5 num' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bfly' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bfly CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'zwood' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.zwood  CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'nlight' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.nlight CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'scary' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.scary  CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'blwood ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.blwood CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'xtrypo' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.xtrypo CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'uflower ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.uflower  CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'flower' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.flower CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'partyneon ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.partyneon  CyberQueen/1-5 num' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'dmetal' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.dmetal CyberQueen/1-5 num' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ubeach ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ubeach  CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'zwater ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.zwater CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'turi ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.turi  CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'gocs   ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.gocs    CyberQueen/1-5 num' + ']\n\n' +
            '⚠️අවසානෙට ඉලක්කම් දාන්න තියන command වල ඉලක්කම අනිවාරෙන් දාන්න background වෙනස් වෙනව ඒකෙන්...' + '\n\n' +
            '   ┏━━━━━°❀❀°━━━━━┓\n   ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴇᴇɴᬐ LOGO PACK\n   ┗━━━━━°❀❀°━━━━━┛' + '\n'            

    var logoimg = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (logoimg.data), MessageType.image, {mimetype: Mimetype.png, caption: msg }) 
 }));
}
if (Config.WORKTYPE == 'public') {
Asena.addCommand({pattern: 'spack', fromMe: false, desc: Lang.TET_DESC}, (async (message, match) => {
    const msg ='   ┏━━━━━°❀❀°━━━━━┓\n   ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴇᴇɴᬐ LOGO PACK\n   ┗━━━━━°❀❀°━━━━━┛' + '\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'metalic' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.metalic CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'romantic' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.romantic CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'burnp' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.burnp CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ccup' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ccup CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'cofee' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.cofee CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'grass' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.grass CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'hwood' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.hwood CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bwood' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bwood CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'summer' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.summer CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'nature' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.nature CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'uwater' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.uwater CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'nsummer ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.nsummer CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ufall' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ufall CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'geon' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.geon  CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'nsky ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.nsky  CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ucube' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ucube CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'fur' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.fur CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'crisp' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.crisp CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'embro ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.embro CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'uweb' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.uweb  CyberQueen/1-5 num' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'gleave ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.gleave CyberQueen/1-5 num' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'bfly' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.bfly CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'zwood' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.zwood  CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'nlight' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.nlight CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'scary' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.scary  CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'blwood ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.blwood CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'xtrypo' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.xtrypo CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'uflower ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.uflower  CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'flower' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.flower CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'partyneon ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.partyneon  CyberQueen/1-5 num' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'dmetal' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.dmetal CyberQueen/1-5 num' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'ubeach ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.ubeach  CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'zwater ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.zwater CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'turi ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.turi  CyberQueen' + ']\n\n' +
            '│🍁 ᴄᴏᴍᴍᴀɴᴅ↛.' + 'gocs   ' + '\n' +
            '│🍃 ᴜꜱᴇ↛[' + '.gocs    CyberQueen/1-5 num' + ']\n\n' +
            '⚠️අවසානෙට ඉලක්කම් දාන්න තියන command වල ඉලක්කම අනිවාරෙන් දාන්න background වෙනස් වෙනව ඒකෙන්...' + '\n\n' +
            '   ┏━━━━━°❀❀°━━━━━┓\n   ᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴇᴇɴᬐ LOGO PACK\n   ┗━━━━━°❀❀°━━━━━┛' + '\n'            

    var logoimg = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })
    await message.sendMessage (Buffer.from (logoimg.data), MessageType.image, {mimetype: Mimetype.png, caption: msg }) 
 }));
}*/
