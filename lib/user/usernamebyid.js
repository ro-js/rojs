/*
* ------------rojs-------------
* GetUsernameByID(id, callback)
* Gets username by UserID on Roblox.
* ------------rojs-------------
*/

const fetch = require('node-fetch');
const clc = require("cli-color");

module.exports = {
    GetUsernameByID: function (user, callback) {
        if(!user) {
            console.log(clc.red("✖ RoJS: Specify an User ID!"));
         }
        else {
            fetch('https://users.roblox.com/v1/users/'+user)
            .then(res => res.json())
            .then(function(json) { 
              var result = json['name'] 
                 callback(result)
            });
        }
    }
}