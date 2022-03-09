/*
* ------------rojs-------------
* SetCookie(cookie, callback)
* Set cookie for functions that require it.
* ------------rojs-------------
*/

const clc = require("cli-color");
const fs = require("fs");

module.exports = {
    GetUsernameByID: function (cookie, callback) {
     if (!cookie.toLowerCase().includes('warning:-')) {
      console.log(clc.red('✖ RoJS: No Roblox warning detected in cookie.'));
     }
     else {
        fs.writeFile(__dirname + "/savedcookie.rojs.txt", cookie, function(err) {
            if (err) {
                return console.log(clc.red('✖ RoJS (SetCookie.js): '+err));
            }
            if(!callback) {
            console.log(clc.green("RoJS: Saved cookie!"));
            }
            else {
                callback(true);
            }
        });
     }
   }
 }
