var request = require("sync-request");
var res = request("GET", `https://davidmusic.glitch.me/`, {
  headers: {
    "user-agent": "David's Website"
  }
});

module.exports = JSON.parse(res.getBody()).song;
