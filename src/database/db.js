const Database = require('sqlite-async');

function execute(db) {
    return db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        profilePicture TEXT,
        firstName TEXT,
        lastName TEXT,
        email TEXT,
        password TEXT,
        whatsapp TEXT,
        biography TEXT
        );
        `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute)