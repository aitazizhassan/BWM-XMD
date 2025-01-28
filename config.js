const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA71Vaa+iSBT9K5P6qt2yLyadDBTgioqKiJPJpJBCkNWiXLDz/vsEfS/9kp7pfpN0hk+E5dS5955z7ldQlEmNJ7gB/a+gIskFUdze0qbCoA/0cxRhArogRBSBPjjZmroQUmGmFjchL5b7+7hyvZtt7eFiXIwGiWdLi0w2zi7zBbx0QXUOsmT/A0ADbbeu1zmJTZPx2bqRbte74ypY1OqZJedXTg4YM51nyHS+gJcWESUkKQ5mFeMcE5RNcLNACfkYfX+yHRoxheo4X4uxPBjlZbXZbTd3x92t3Lk63bEa7801e6N9jL5pzuKax6EvGzq6jHYDim7ePDWm5ky8zLdBFu6djVuiTNs/6dfJocDhKMQFTWjz4b5z5nmwGODBcnkXbV/uWKEddrybwPgH+9ihtpcFR8xS+zhUPkbcc24dtC+yDTsZHrOeo+DFeDYrt9J6LPkzagdzpjI8uDxtyvfEF+RNK+l/6bswkvJbzHROc4tpFouDuznyXjMqyssx8SQR5W7CT72hnJjXj9FXOeO0E+NpeuXCrdPoeGLM0qEMkR4NQkXx52YFiRMV1BG+0Uf0TH7EsthMO4avDHNpsW40XR5OYWGcthsYDo6dcX5kpsdShKWV+tgpURMnvj5N79ElNPCYLS3uKN4rEk7lqarW5xmB0YTrGM6XR0UpbkYh6LMvXUDwIakpQTQpi8czTukCFF5WeE8wfbQXQMbd9BwineUUrzmlF6FguPP1Ujs6Vrly1zN499dqL2qUwxfQBRUp97iucThMalqSxsZ1jQ64Bv0/HpNqiyY4LykeJ2ErJ5aTeEVWOFbmfq8/X2NEa1RVnwtMQRdEpMxtDPqUnHEXPH7gdUVURchbqgoVg5V5yYSSyhiWBRlOEZS2xPx56DrJcU1RXoE+K/MKyygsJ790fxEPDUJdtiSVE0SBU1WW5w1JYVjFVDjIqMb/xQMKgs4aKs8zmsqbpgChJkGoQ42BOsvp3E94qL+KhyiYnMyJuipxqsZCRtNZQ5Y1i2NEllEV/ac8/uyCAt/o09etGnm2C6KE1NQtzlVWovDN9G8v0X5fngu6aoo9bG8wAf13jzGlSXGo28rOBSL7OLlg2NYB+hHKavzSBSG+JHvc4oHLUhm6aHdf5YN5c7z8dSemZR5aRcdl8fxEFCU5YBH7iWXV8JPAIPETEhnhU8CyPBeGSGFkGbTteEZq+8+/OvwuwdGY4Wo5YNzBchk4I+ztINlWhftw6dOamODwrcsB2qfnal2muPgBbq/0K4vZEi5VhXQqT1xq1E6vs+pQ5R3u0/Kg//XbGoNl2OLZys72vW1bR/5IqO/U0Of57wVRoPZrkBTX5LeH5F6H0CKEmKIkq1utjslNuacOMyuyi+b7RqNpE01rc+NtaG/h+Ayf864uB/ppHI8k5jBkPHNRZwqHyQk3zSYdKGuo9lAorSbmP4KAPpgw1tl1svWZoQVXnfwDnKRLSaXCameu+WXHkEvCWZI3KcTNCDN+1LkE5Fgf1AkNUA8VSVzJiTCzNpUyn8R5vJV3CmyT9E087w8jcIZPQjVBSblhV6No1NtMbelYxiq/S5052eT7S8dmZSWRVah5wURkK98hBk7ZMlyPl+Z4VIXNbekOh/ZVpPX8Kg/g4Rnbj7WRva7r5DVQn1KLEvzYfq9D+Omwvqmeeem+w3jdp/+iLD3Ig4l+QIm/mtORrlqxIY+jWXGSirrOdvrFvF4irsBpEmvgpbVzlSEalSQHfVDnAQJdkKGaat9c+09BIHZB3mhVtaKIvpkdaI9LHYKXvwGWMz4CJwoAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

