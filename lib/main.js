/*
* ------------rojs-------------
* Caller of Functions file
* ------------rojs-------------
*/

var GetIDByUsernameTool = require('./user/idbyusername');
var GetUsernameByIDTool = require('./user/usernamebyid');
var GetVersionTool = require('./sys/version');

exports.GetUsernameByID = function(user, callback) {
    GetUsernameByIDTool.GetUsernameByID(user, callback)
}

exports.GetIDByUsername = function(user, callback) {
    GetIDByUsernameTool.GetIDByUsername(user, callback)
}

exports.GetVersion = function(callback) {
    GetVersionTool.GetVersion(callback)
}
