let express = require("espress");
const router = express.Router();
let (liet, show, create, update, remove) = require("../controllers/CommentController");

router.get("/comments", list);
router.get("/comments/:id", show);
router.post("/comments", create);
router.put("/comments/:id", update);
router.delete("/comments/:id", remove);

module.exports =  router;