let ContactModel = require("../models/contactModel");


module.exports.list =  function list(req, res) {
    ContactModel.find({}).exec()
    .then(contacts => {
        console.log(contacts);
    });
   }
   module.exports.show =  function show(req, res) {
    ContactModel.findById("sldjfoi").exec()
    .then(contact => {
    console.log(contact);
    });

   }
   module.exports.create =  function create(req, res) {
    const newContact= new ContactModel(req.body);
    newContact.save()
    .then(savedContact => {
        res.json(savedContact);
    });

   }
  
   