const { connect, connection } = require('mongoose');

// Link to database
const connectionString = 'mongodb://127.0.0.1:27017/socialnetworkdb';

// Connects to mongo db
connect(connectionString);

module.exports = connection;

