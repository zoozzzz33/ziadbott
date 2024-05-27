const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");

const app = express(); 
app.set("port", (process.env.port || 5008
));

app.use(bodyparser.urlencoded({extended :false}));
app.use(bodyparser.json());

app.get("/",function(req,res){
    res.send("hey, iam just a bot");
})
app.listen(app.get("port"),function(){
    console.log("server is running and listening on port " + app.get("port"));
});