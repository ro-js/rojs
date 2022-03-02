var rojs = require('../lib/main')

function logs(user) {
  console.log(user)
}

rojs.GetUsernameByID(1, logs)
