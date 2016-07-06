// problem: simple way to look at users badge count and JS points
//variables  
var http = require("http");
//print out message 
//Solution:Use node js to connect to treehouse API to get profile information to print out 


 
function printMessage(username+ badgeCount, points)
  var message = username + " has " + badgeCount + total badges(s) and " points + "points in JavaScript ;
  console.log (message);
)

//print out error message 
function printError(error){
  console.error(error.message)
}

function get (username){
//connect to the API url
var request = http.get ("http://teamtreehouse.com/username.json" + username + " .json, function(response){
     console.error(error.message);                 
}")
var body=" ";
//read the date
    response.on('', function(chunk){
      body += chunk;
    });
response.on('end', funtion(){
  if (response.statusCode ===200){
    try{
      //parse the date out 
    var profile = JSON.parse(body);
      //print the data out 
    printMessage ( username,profile.badges.length,profile.points.JavaScript)
      }catch(erro){
//parse error 
      printError(error);
  }
  //statusCode error 
  printError({message "there was an error getting a profile for + username + " .(" + http.STATUS_
             CODES[response.statusCode] + ")"});
});

//connection error 
  request.on("error",printError{
             })                     
                
}
  module.export.get=get;
  

       
