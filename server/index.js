let express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");
let bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get ("/comments", (req,res,) => {
    return res.json(comments);
});
app.get ("/comment/:commentid", (req,res) => {
    var identity = req.params.commentid;
    function newFunction(identity) {
        return res.json(identity);
    }
    comments.find(newFunction);
    return res.json(identity);
});
app.post ("/comments", (req,res,) => {
    let newComment = req.body;
    comments.push(newComment);
    res.json(newComment);
    //req.body.id = 1;
    // comments.push(req.body)
    // return res.send(req.body);
});




app.get ("/products", (req,res) => {
    return res.json(products);
});
app.post ("/products", (req,res,) => {
    let newProduct = req.body;
    products.push(newProduct);
    res.json(newProduct);
});

app.get ("/vehicles", (req,res) => {
    return res.json(vehicles);
});
app.post ("/vehicles", (req,res,) => {
    let newVehicle = req.body;
    vehicles.push(newVehicle);
    res.json(newVehicle);
});


app.get ("/contacts", (req,res) => {
    return res.json(contacts);
});
app.post ("/contacts", (req,res,) => {
    let newContact = req.body;
    contacts.push(newContact);
    res.json(newContact);
});




app.listen(3001, (err) => {
    if (err) {
        return console.log("Error", err);
    }
    console.log("Web server is on port 3001")
});


