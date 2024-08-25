const express = require("express");
const { getReq, postReq } = require("./controller");

const router = express.Router();

router.get("/", getReq);
router.post("/", postReq);

module.exports = router;
