let contacts = require("../contacts");

module.exports.list =  function list(req, res) {
    return res.json(contacts);
   }
   module.exports.show =  function show(req, res) {
    let contactId = req.params.id;
    let myContact = contacts.find((contact) => {
        return (contact._id == contactId)
    });
    return res.json(myContact)
   }
   module.exports.create =  function create(req, res) {
    // req.body._id = personId;
    // personId ++;
    let newContact = req.body;
    contacts.push(newContact);
    return res.json(newContact);
   }
  
   