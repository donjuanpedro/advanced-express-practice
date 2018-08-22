let ProductModel = require("../models/productModel");


module.exports.list =  function list(req, res) {
    ProductModel.find({}).exec()
    .then(products => {
        console.log(products);
    });
   }
   module.exports.show =  function show(req, res) {
    ProductModel.findById("sldjfoi").exec()
    .then(product => {
    console.log(product);
    });

   }
   module.exports.create =  function create(req, res) {
    const newProduct= new ProductModel(req.body);
    newProduct.save()
    .then(savedProduct => {
        res.json(savedProduct);
    });

   }
   