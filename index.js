const express = require('express');

const app = express();  
var axios = require('axios');
var qs = require('qs');
const path = require('path');
var compiler = require('compilex');
const  fs  = require('fs-extra');

compiler.init({stats : true});

app.use(express.static('assets'));
app.use(express.urlencoded({extended:false}));
app.get('/',function(req,res){
  return res.sendFile(path.join(__dirname,'/index.html'));

});

app.post('/runCode',  async function(req,res){
  console.log(req.body);
  var envData = { OS : "windows"}; 
  compiler.compileJava( envData , req.body.code , function(data){
    compiler.flushSync();
    
    return res.send(data); 
    

});   
  // var output = await getOutput(req.body);
  // if(output.error) return res.send(output.error);
  // return res.send(output.output);
})



app.listen(8000, function(err){
    console.log("connected to 8000");
})