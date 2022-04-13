var mongoose = require('mongoose');

let conn = null;

const uri = process.env.MONGODB_URI;

exports.handler = function (event, context, callback) {

  context.callbackWaitsForEmptyEventLoop = false;

  run().
    then(res => {
      callback(null, res);
    }).
    catch(error => callback(error));
};

function run() {


  if (conn == null) {
    conn = yield mongoose.createConnection(uri, {
      bufferCommands: false,
      bufferMaxEntries: 0
    });
    conn.model('users', new mongoose.Schema({
      avatar: String,
      discriminator: String,
      email: String,
      ip: String,
      name: String
    }));
  }

  const M = conn.model('users');

  const doc = yield M.find();
  const response = {
    statusCode: 200,
    body: JSON.stringify(doc)
  };
  return response;

}