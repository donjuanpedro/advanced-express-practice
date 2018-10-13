let ProductModel = require("../models/productModel");


module.exports.list =  function list(req, res) {
    ProductModel.find({}).exec()
    .then(products => {
        res.json(products);
    });
   }
   module.exports.show =  function show(req, res) {
    ProductModel.findById("").exec()
    .then(product => {
        return product.save();
    })
    .then(product => {
        res.json(product);
    });

   }
   module.exports.create =  function create(req, res) {
    const newProduct= new ProductModel(req.body);
    newProduct.save()
    .then(savedProduct => {
        res.json(savedProduct);
    });

   }
   