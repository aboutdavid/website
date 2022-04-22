var request = require("sync-request");
var res = request("GET", `https://gh-latest-repos-beta.vercel.app/`, {
  headers: {
    "user-agent": "David's Website"
  }
});

module.exports = JSON.parse(res.getBody());
