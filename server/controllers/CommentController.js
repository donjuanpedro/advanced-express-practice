let CommentModel = require("../models/commentModel");

module.exports.list =  function list(req, res) {
    CommentModel.find({}).exec()
    .then(comments => {
        res.json(comments);
    });
   }
   module.exports.show =  function show(req, res) {
    CommentModel.findById("").exec()
    .then(comment => {
        return comment.save();
    })
    .then(comment => {
        res.json(comment);
    });
   }
   module.exports.create =  function create(req, res) {
    const newComment= new CommentModel(req.body);
    newComment.save()
    .then(savedComment => {
        res.json(savedComment);
    });

   }
  
   
   