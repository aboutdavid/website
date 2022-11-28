const username = "aboutDavid";
var request = require("sync-request");
var res = request(
  "GET",
  `https://api.github.com/users/${username}/events/public`,
  {
    headers: {
      "user-agent": "Mozilla/5.0 (compatible; aboutdavid.me/1.0)",
      //Authorization": `Bearer ${process.env.GITHUB_TOKEN}`
    }
  }
);
function time(date) {
return new Date(date).toLocaleString('en-US', { timeZone: 'America/New_York', timeStyle: "short", dateStyle: "long" }).toString()
}
const activities = JSON.parse(res.getBody());

for (let i = 0; i < activities.length; i++) {
  if (activities[i].type === "PushEvent") {
    const commit =
      activities[i].payload.commits[activities[i].payload.commits.length - 1];

    module.exports = {
      message: commit.message,
      url: `https://github.com/${activities[i].repo.name}/commit/${commit.sha}`,
      time: time(activities[i].created_at),
      repo: activities[i].repo.name
    };
    break;
  }
}