var request = require("sync-request");
var res = request("GET", `https://gh-latest-repos-beta.vercel.app/`, {
  headers: {
    "user-agent": "Mozilla/5.0 (compatible; aboutdavid.me/1.0)",
  },
});

module.exports = JSON.parse(res.getBody());
