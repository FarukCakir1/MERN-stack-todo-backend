const express = require("express")

const router = express.Router()

const {getData, insertData, updateData, removeData} = require("../controllers/todoControllers")

router.route("/").get(getData)
router.route("/").post(insertData)
router.route("/:id").post(updateData)
router.route("/delete/:id").post(removeData)


module.exports = router