const router = require("express").Router();

const controller = require("../controllers/calcController.js");

router.route("/save").get(controller.limit);

router.route("/save").post(controller.save);

// export the router
module.exports = router;
