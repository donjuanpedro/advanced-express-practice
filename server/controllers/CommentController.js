let comments = require("../comments");

module.exports.list =  function list(req, res) {
    return res.json(comments);
   }
//    module.exports.show =  function show(req, res) {
//     let postId = req.param.id;
//     comments.find(postId);
//     res.json({commentid:postId});
//    }
   module.exports.create =  function create(req, res) {
    let newComment = req.body;
    comments.push(newComment);
    res.json(newComment);
   }
  
   
   