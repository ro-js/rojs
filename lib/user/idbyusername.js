/*
* ------------rojs-------------
* UploadAudio(path, callback)
* Upload an audio to ROBLOX.
* ------------rojs-------------
*/

const clc = require("cli-color");
const fetch = require('node-fetch');

module.exports = {
    GetIdByUsername: function (username, callback) {
        if(callback) {
        if(!id) {
            console.log(clc.red("✖ RoJS: Specify an username!"));
         }
        else {
          fetch('https://api.roblox.com/users/get-by-username?username='+username)
            .then(res => res.json())
            .then(function(json) { 
              var result = json['Id'] 
                 callback(result)
            });
        }
    }
    else {
      console.log(clc.red("✖ RoJS: No callback provided!"));
    }
  }
}