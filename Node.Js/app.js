var profile= require("./profile.js")
var users =["shirismashavers","chalkers"]
users.forEach(profile.get);

//profile.get(shirismashavers)
//profile.get (chalkers)
//or options
var profile= require("./profile.js")
var users =process.argv.slice(2);
users.forEach(profile.get);users.forEach(profile.get);