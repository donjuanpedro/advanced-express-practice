let products = require("../products");

module.exports.list =  function list(req, res) {
    return res.json(products);
   }
   module.exports.show =  function show(request, response) {
    // return response.json({theId: request.params.id});
   }
   module.exports.create =  function create(req, res) {
    let newProduct = req.body;
    products.push(newProduct);
    res.json(newProduct);
   }
  
   