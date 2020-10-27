const express = require('express');
const router = express.Router();

const Organization = require("../../db/models/Organization");

router.get("/", async (req, res, next) => {
    const organizations = await Organization.find();
    return res.send(organizations);
});
;
module.exports = router;
