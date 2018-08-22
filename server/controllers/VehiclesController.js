let VehicleModel = require("../models/vehicleModel");


module.exports.list =  function list(req, res) {
    VehicleModel.find({}).exec()
    .then(vehicle => {
        console.log(vehicle);
    });
   }
   module.exports.show =  function show(req, res) {
    VehicleModel.findById("sldjfoi").exec()
    .then(vehicle => {
    console.log(vehicle);
    });

   }
   module.exports.create =  function create(req, res) {
    const newVehicle= new VehicleModel(req.body);
    newVehicle.save()
    .then(savedVehicle => {
        response.json(savedVehicle);
    });

   }