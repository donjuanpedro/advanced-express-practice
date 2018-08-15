let products = require("../products");

module.exports.list =  function list(req, res) {
    return res.json(products);
   }
   module.exports.show =  function show(req, res) {
    let productId = req.params.id;
    let myProduct = products.find((product) => {
        return (product._id == productId)
    });
    return res.json(myProduct)
   }
   module.exports.create =  function create(req, res) {
    req.body._id = prodId;
    prodId ++;
    let newProduct = req.body;
    products.push(newProduct);
    return res.json(newProduct);
   }
  
   