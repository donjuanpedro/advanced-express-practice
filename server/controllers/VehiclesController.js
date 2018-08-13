let vehicles = require("../vehicles");

module.exports.list =  function list(req, res) {
    return res.json(vehicles);
   }
//    module.exports.show =  function show(request, response) {
//     return response.json({theId: request.params.id});
//    }
   module.exports.create =  function create(req, res) {
    let newVehicle = req.body;
    vehicles.push(newVehicle);
    res.json(newVehicle);
   }
  
   