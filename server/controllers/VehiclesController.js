let vehicles = require("../vehicles");

module.exports.list =  function list(req, res) {
    return res.json(vehicles);
   }
   module.exports.show =  function show(request, response) {
    let carId = req.params.id;
    let myCar = vehicles.find((car) => {
        return (car._id == carId)
    });
    return res.json(myCar)
   }
   module.exports.create =  function create(req, res) {
    req.body._id = vehicleId;
    vehicleId ++;
    let newVehicle = req.body;
    vehicles.push(newVehicle);
    return res.json(newVehicle);
   }
  
   