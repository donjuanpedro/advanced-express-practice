let comments = require("../comments");

   module.exports.list =  function list(req, res) {
    return res.json(comments);
   }
   module.exports.show =  function show(req, res) {
    let commentId = req.params.id;
    let myComment = comments.find((comment) => {
        return (comment._id == commentId)
    });
    return res.json(myComment)
   }
   module.exports.create =  function create(req, res) {
    req.body._id = postId;
    postId ++;
    let newComment = req.body;
    comments.push(newComment);
    return res.json(newComment);
   }
  
   
   