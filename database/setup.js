const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('data.db');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS messages (text TEXT)");
  db.run("INSERT INTO messages (text) VALUES ('Hello from Database!')");
});

db.close();
