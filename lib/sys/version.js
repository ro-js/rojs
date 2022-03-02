/*
* ------------rojs-------------
* GetVersion(callback)
* Get an current version of package.
* ------------rojs-------------
*/

const clc = require("cli-color");
const version = '@1.0.12';

module.exports = {
    GetVersion: function (callback) {
      if(callback) {
      callback(version)
    }
    else {
     console.log(version)
    }
  }
}