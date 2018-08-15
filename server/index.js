let express = require("express");
let bodyParser = require("body-parser");
const app = express();

let CommentRoutes = require("./modelRoutes/commentRoutes");
let ContactRoutes = require("./modelRoutes/contactRoutes");
let VehiclesRoutes = require("./modelRoutes/vehiclesRoutes");
let ProductsRoutes = require("./modelRoutes/productsRoutes");




app.use(bodyParser.json());

app.use(CommentRoutes);
app.use(ContactRoutes);
app.use(VehiclesRoutes);
app.use(ProductsRoutes);


const port = process.env.PORT || 3001;
app.listen(port, () => {
console.log(`Listening on port:${port}`);
});




