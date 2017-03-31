var path = require('path')
var funcs = require('./funcs')
var encodeName = module.exports.encodeName = funcs.encodName


var session = {
  username: process.argv[2],
  lastMessageHash: process.argv[3]

}






// 1. load the database
var dbFile = path.join(__dirname, 'db', 'index.json')
funcs.loadDb(dbFile, function (err, db) {

  // 2. encode the name
  //var encoded = encodeName(session.usrename)
   var encoded = encodeName(session.username)

  // 3. find the user's inbox
  var inbox = funcs.findInbox(db, encoded)

  // 4. find the next message
  var nextMessage = funcs.findNextMessage(inbox, session.lastMessageHash)

  // 5. print out the message.
  // Paste the console output into the "Solution" field and you're done!
  console.log(nextMessage)
})

console.log(encodName)

var result = return 'from: ' + decode(inbox.messages[found].from) + '\n---\n' +
    decode(fs.readFile(path.join(inbox.dir, inbox.messages[found].hash), 'utf8'))
}

console.log(result)
