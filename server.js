var httpserver=require('http');
var expresshttpserver= require('express');
var app = expresshttpserver();
httpserver.createServer(function(req,res)
{
  res.write('hi World');
   res.end();
   console.log("server is created");

}).listen(8080);

/// advanced version http serve using express package 
app.listen(8081,(rq,rs) =>{

    console.log("My server is started");
})
app.get('/hello', function (req, res) {

    res.send('Hello World!');
  });

  app.get('/', function (req, res) {

    res.send('Hello Im in root');
  });