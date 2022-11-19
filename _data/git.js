var units = {
    year  : 24 * 60 * 60 * 1000 * 365,
    month : 24 * 60 * 60 * 1000 * 365/12,
    day   : 24 * 60 * 60 * 1000,
    hour  : 60 * 60 * 1000,
    minute: 60 * 1000,
    second: 1000
  }
  
  var rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
  
  var getRelativeTime = (d1, d2 = new Date()) => {
    var elapsed = d1 - d2
  
    // "Math.abs" accounts for both "past" & "future" scenarios
    for (var u in units) 
      if (Math.abs(elapsed) > units[u] || u == 'second') 
        return rtf.format(Math.round(elapsed/units[u]), u)
  }
var int = parseInt(require('child_process').execSync('git log -1 --format=%ct').toString())
module.exports = {
    full: require('child_process') .execSync('git rev-parse HEAD') .toString().trim(),
    short: require('child_process') .execSync('git rev-parse --short HEAD') .toString().trim(),
    time: getRelativeTime(int * 1000)
}