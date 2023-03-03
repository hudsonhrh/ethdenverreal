const { MongoClient } = require("mongodb");

console.log(process.env.dbURI)

const Db = process.env.dbURI;

const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("kubiDAO");
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};