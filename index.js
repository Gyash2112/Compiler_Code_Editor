const express = require('express');

const app = express();  
var axios = require('axios');
var qs = require('qs');
const path = require('path');

app.use(express.static('assets'));
app.use(express.urlencoded({extended:false}));
// function getOutput(postdata){
//   return new Promise(function(resolve, reject){
//     var data = qs.stringify({
//       'code': postdata.code,
//       'language': postdata.language,
//       'input': postdata.input   
//   });

  
  
//   var config = {
//       method: 'post',
//       url: 'https://api.codex.jaagrav.in',
//       headers: {
//           'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       data : data
//   };
//   var output="";
//   axios(config)
//     .then( function (response) {
//       JSON.stringify(response.data);
//       console.log(response.data);
//       resolve(response.data);
//     })
//     .catch(function (error) {
//       console.log(error);
//       reject(error);
//     });
//     console.log(output);
    

//   })
// }
app.get('/',function(req,res){
  return res.sendFile(path.join(__dirname,'/index.html'));

});

app.post('/runCode',  async function(req,res){
  console.log(req.body);
  // var output = await getOutput(req.body);
  // if(output.error) return res.send(output.error);
  return res.send(output.output);
})

app.listen(8000, function(err){
    console.log("connected to 8000");
})