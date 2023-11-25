const express = require("express")
const router = express.Router();
const accountsController = require("../controllers/accountsController")

router.get("/", accountsController.showUsers )


module.exports = router;