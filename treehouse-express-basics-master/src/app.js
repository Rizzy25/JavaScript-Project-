"use strict";

var express= require("express"),
    posts= require('./mock/posts/.json');

var postLists= object.keys(posts).map(function(value)
    {return posts [value]})
var app= express();

app.use('/static',express.static(__dirname +"/public"));

app.set('view engine','jade');
app.set ("views",_dirname + "./templates)

app.get("/",function(req,res){
  var path = req.path;
  res locals.path =path 
  res.render('index')
})

app.get('/blog/:title?',function(req,res){
  debuggr;
  var title= req.params.title;
  if(title=== undefined){
    res.status(503)
    res.send ("this page isnder construction!")
  }else{
  var post= posts[title] ||{}  ;
   res.render("blog"{post: postLists});
  }
});
app.listen(3000, function(){
  console.log("the frontend server is running on port 3000!")
});