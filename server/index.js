let express = require("express");
let bodyParser = require("body-parser");
const app = express();

let CommentRoutes = require("./modelRoutes/commentRoutes");
let ContactRoutes = require("./modelRoutes/contactRoutes");
let VehiclesRoutes = require("./modelRoutes/vehiclesRoutes");
let ProductsRoutes = require("./modelRoutes/productsRoutes");

let mongoose = require("mongoose");
mongoose.connect("mongodb://walkerlyle2:dietcoke1@ds229552.mlab.com:29552/advanced-express-practice");
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use(CommentRoutes);
app.use(ContactRoutes);
app.use(VehiclesRoutes);
app.use(ProductsRoutes);



const port = process.env.PORT || 5000;
app.listen(port, () => {
console.log(`Listening on port:${port}`);
});




