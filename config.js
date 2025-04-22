require('dotenv').config(); 

global.owner = process.env.OWNER_NUMBER; 
global.anitav4 = process.env.BOT_NAME || "𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒";
global.ownername = process.env.OWNER_NAME || "David Cyril";
global.packname = process.env.PACK_NAME || "𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒";
global.author = process.env.AUTHOR || "𝐃𝐀𝐕𝐈𝐃 𝐂𝐘𝐑𝐈𝐋";
global.channelname = process.env.CHANNEL_NAME || "𝐃𝐀𝐕𝐈𝐃 𝐂𝐘𝐑𝐈𝐋";
global.channeljid = process.env.CHANNEL_JID ||{"noiseKey":{"private":{"type":"Buffer","data":"6F8e97tj2SOUeuMB3+o8K6bqQc/5vx4aZ6nCUVbvmE4="},"public":{"type":"Buffer","data":"ITh9kYF9r7lkwrX4akzHr6wcmPwBsQVUKCBu7NJADm0="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"2Bujm3C71OaR+sx93Yxfvrj+Z4jcru+YwYZ0d+nw/Wg="},"public":{"type":"Buffer","data":"QSx7IqKykcap46vlkBycPh3bZ4vAy1PepMYmIO696FE="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"EBr9TD/OOrkhRAySaTgBUyZO1KP+wwNEY72nTFJQMnk="},"public":{"type":"Buffer","data":"jipvOKbwe6MSsLgNceko9j7ajublIPgVh3S4d6UnNEo="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"iCRH//V4gMPKIOAOIULgzCCmFS+xGTcQ1dZVhbOwnlM="},"public":{"type":"Buffer","data":"2Posj4zd+dSkzv0rHYSZcAaV8wvaTwbIJiy3Zipt8FU="}},"signature":{"type":"Buffer","data":"k6aWtWGQey8+qPbRuW7O2Z3Eh+9jn3ywrWtcCJZJszQP0DPMftECFFbwNDIt8rIR6xAYdiqJHY4W7BBmpsQGAA=="},"keyId":1},"registrationId":187,"advSecretKey":"w0QYsvxtu1/S9Qkzpz2ZR/bYl4POXXyVE4oKWMgrJ/g=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"X2cQ9m2RQcO-tBPu1FK8tg","phoneId":"eca8e071-3c3b-4d99-88e9-1289923c31c1","identityId":{"type":"Buffer","data":"grrMXgKXIa0lv9JPzc1aP0jkmEQ="},"registered":true,"backupToken":{"type":"Buffer","data":"D9toIynf/xf2UeTHv1E4DAiEABI="},"registration":{},"pairingCode":"TK9TDZH8","me":{"id":"923238702209:8@s.whatsapp.net"},"account":{"details":"CMqx37ICELDansAGGAMgACgA","accountSignatureKey":"zvHzX6rTrafXAsAFnDentRaEjezVgXeX1XUnnDe7oDA=","accountSignature":"+6jsIda4bdmOrhLvNXPK4EuZDsnfRDD+BZj1ebHGZoQXRR4qbka7/lbC/DboH3E5xGBUk5dUYwQyp/eQK+klAQ==","deviceSignature":"ldAR9ps0FtEMOdK4TIsPCVkHK30Mmf6gng38rpjqYevLbl1PcSaKNwVt136Txd49URx1HWJnhbWcqrqP6OV0DA=="},"signalIdentities":[{"identifier":{"name":"923238702209:8@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bc7x81+q062n1wLABZw3p7UWhI3s1YF3l9V1J5w3u6Aw"}}],"platform":"android","lastAccountSyncTimestamp":1745333566,"myAppStateKeyId":"AAAAAPCA"}8"120363315231436175@newsletter";
global.autoTyping = process.env.AUTO_TYPING === 'true'; 
global.autoRecord = process.env.AUTO_RECORD === 'true';
global.autoViewStatus = process.env.AUTO_VIEW_STATUS === 'true';
global.AUTOSTATUS_REACT = process.env.AUTOSTATUS_REACT === 'true';
global.autoLikeEmoji = process.env.AUTO_LIKE_EMOJI || "💚";

global.LEVELUP = process.env.LEVELUP === 'true';

global.ANTIVIEWONCE = process.env.ANTIVIEWONCE === 'true';

global.roles = {
    1: "Novice",
    3: "Learner",
    5: "Apprentice",
    8: "Magician",
    10: "Wizard",
    15: "Sorcerer",
    20: "Grandmaster",
    25: "Legend",
};


global.public = process.env.PUBLIC === 'true';

global.ANTIDELETE = process.env.ANTIDELETE === 'true';
global.unavailable = process.env.UNAVAILABLE === 'true';
global.available = process.env.AVAILABLE === 'true';
global.autoreadmessages = process.env.AUTO_READ_MESSAGES === 'true';
global.chatbot = process.env.CHATBOT === 'true';
global.autoreact = process.env.AUTO_REACT === 'true';

global.WELCOME = process.env.WELCOME === 'true';

global.prefix = process.env.PREFIX || '.';

global.autobio = process.env.AUTO_BIO === 'true';

global.ANTICALL = process.env.ANTICALL === 'true';

global.antilink = process.env.ANTILINK === 'true';
global.antilinkkick = process.env.ANTILINK_KICK === 'true';
global.antilinkwarn = process.env.ANTILINK_WARN === 'true';

global.mess = {
    success: process.env.MESSAGE_SUCCESS || '𝙳𝚘𝚗𝚎',
    admin: process.env.MESSAGE_ADMIN || '_*❗This Command Can Only Be Used By Group Admins !*_',
    botAdmin: process.env.MESSAGE_BOT_ADMIN || '_*❗This Command Can Only Be Used When Bot Becomes Group Admin !*_',
    OnlyOwner: process.env.MESSAGE_OWNER || '_*❗This Command Can Only Be Used By My Owner !*_',
    OnlyGrup: process.env.MESSAGE_GROUP || '_*❗This Command Can Only Be Used In Group Chat !*_',
    private: process.env.MESSAGE_PRIVATE || '_*❗This Command Can Only Be Used In Private Chat !*_',
    wait: process.env.MESSAGE_WAIT || '_*Please Wait*_',
    notregist: process.env.MESSAGE_NOT_REGIST || '_*You are not registered in the Bot Database. Please register first*_',
    premium: process.env.MESSAGE_PREMIUM || '_*Premium only" Want Premium? Chat Owner*_',
    endLimit: process.env.MESSAGE_END_LIMIT || '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 AM_*.',
};


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
