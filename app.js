var express = require('express');
var request = require('request');
var app = express();
app.set('view engine', 'ejs');


 
app.get('/',function(req,res){
    res.render('home');
})

app.get('/result',function(req,res){
    var input = req.query.info;
    var url = 'http://api.tvmaze.com/search/shows?q=' + input;
    request(url,function(error,response,body){
        var data = JSON.parse(body);
        res.render('index',{data:data});
    })
});


app.listen(3000,function(){
    console.log('listening at port 3000');
});