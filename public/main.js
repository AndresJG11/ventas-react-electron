
const { ipcMain } = require('electron');
const sqlite3 = require('sqlite3');

const database = new sqlite3.Database('./public/db.sqlite', (err) => {
    if (err) console.error('Database opening error: ', err);
});

ipcMain.on('asynchronous-message', (event, arg) => {
    const sql = arg;
    console.log("Public: ", sql)
    database.all(sql, (err, rows) => {
        event.reply('asynchronous-reply', (err && err.message) || rows);
    });
});