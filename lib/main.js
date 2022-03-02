/*
* ------------rojs-------------
* Caller of Functions file
* ------------rojs-------------
*/

var GetUsernameByIDTool = require('./user/usernamebyid');

exports.GetUsernameByID = function(user, callback) {
    GetUsernameByIDTool(user, callback)
}
