const express = require("express");
let app = express();
let middleWare = require(__dirname+'/middleware/middleManage')(app);
let route = require(__dirname + '/routes/routesManage.js')(app);
app.get('/',(req, res)=>{
    // console.log(req.headers);
    // console.log(req.cookies)
    console.log(req.query)
    
    res.end('hello world');
})
app.post('/',(req, res)=>{
    // console.log(req.headers);
    // console.log(req.cookies)
    console.log(req.body)
    
    res.end('hello world');
})
app.listen(3000, ()=>{
    console.log("server listening on localhost 3000");
})