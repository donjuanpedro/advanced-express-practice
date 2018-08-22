let CommentModel = require("../models/commentModel");

module.exports.list =  function list(req, res) {
    CommentModel.find({}).exec()
    .then(comments => {
        console.log(comments);
    });
   }
   module.exports.show =  function show(req, res) {
    CommentModel.findById("sldjfoi").exec()
    .then(comment => {
    console.log(comment);
    });

   }
   module.exports.create =  function create(req, res) {
    const newComment= new CommentModel(req.body);
    newComment.save()
    .then(savedComment => {
        response.json(savedComment);
    });

   }
  
   
   