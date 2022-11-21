var int = parseInt(require('child_process').execSync('git log -1 --format=%ct').toString())
module.exports = {
    full: require('child_process') .execSync('git rev-parse HEAD') .toString().trim(),
    short: require('child_process') .execSync('git rev-parse --short HEAD') .toString().trim(),
    date: new Date(int * 1000).toLocaleString('en-US', { timeZone: 'America/New_York', timeStyle: "short", dateStyle: "long" })+ " (EST)"
}