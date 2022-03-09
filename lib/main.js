/*
* ------------rojs-------------
* Caller of Functions file
* ------------rojs-------------
*/

var GetIDByUsernameTool = require('./user/idbyusername');
var GetUsernameByIDTool = require('./user/usernamebyid');
var SetCookieTool = require('./user/setcookie');
var GetVersionTool = require('./sys/version');

exports.GetUsernameByID = function(user, callback) {
    GetUsernameByIDTool.GetUsernameByID(user, callback)
}

exports.SetCookie = function(cookie, callback) {
    SetCookieTool.SetCookie(cookie, callback)
}

exports.GetIDByUsername = function(user, callback) {
    GetIDByUsernameTool.GetIDByUsername(user, callback)
}

exports.GetVersion = function(callback) {
    GetVersionTool.GetVersion(callback)
}
