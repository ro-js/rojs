var rojs = require('../lib/main')

function logs(user) {
  console.log(user)
}

rojs.GetIDByUsername(1, logs)
