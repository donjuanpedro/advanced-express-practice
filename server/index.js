let express = require("express");
let bodyParser = require("body-parser");


let CommentRoutes = require("./modelRoutes/commentRoutes");
let ContactRoutes = require("./modelRoutes/contactRoutes");
let VehiclesRoutes = require("./modelRoutes/vehiclesRoutes");
let ProductsRoutes = require("./modelRoutes/productsRoutes");

const app = express();

app.use(CommentRoutes);
app.use(ContactRoutes);
app.use(VehiclesRoutes);
app.use(ProductsRoutes);

app.use(bodyParser.json());




const port = process.env.PORT || 3001;
app.listen(port, () => {
console.log(`Listening on port:${port}`);
});


