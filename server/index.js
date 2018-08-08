let express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");

const app = express();


app.listen(3001, (err) => {
    if (err) {
        return console.log("Error", err);
    }
    console.log("Web server is on port 3001")
})


app.get ("/products", function(req,res,next){
    return res.send(products);
})
app.get ("/vehicles", function(req,res,next){
    return res.send(vehicles);
})
app.get ("/contacts", function(req,res,next){
    return res.send(contacts);
})
app.get ("/comments", function(req,res,next){
    return res.send(comments);
})

app.get ("/products/:id", function(req,res,next){
    return res.send(products[id]);
})
app.get ("/vehicles/:id", function(req,res,next){
    return res.send(vehicles[id]);
})
app.get ("/contacts/:id", function(req,res,next){
    return res.send(contacts[id]);
})
app.get ("/comments/:id", function(req,res,next){
    return res.send(comments[id]);
})
