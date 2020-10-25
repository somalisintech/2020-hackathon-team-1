var express = require('express');
var router = express.Router();


const Admin = require("../../db/models/Admin");
const Organization = require("../../db/models/Organization");


router.get("/", async (req, res, next) => {
    const admins = await Admin.find();
    return res.send(admins);
});
router.get("/login", async (req, res, next) => {
    let email = req.body.email;
    Admin.findOne({ email: email }).then((admin) => {
        Organization.findOne({ _id: admin.organization }).then((organization) => {
            return res.send(organization)
        })
    })
});

router.post("/", (req, res, next) => {
    Organization.findOne({ _id: req.body.organization }).then(async (organization) => {
        const admin = new Admin({
            email: req.body.email,
            password: req.body.password,
            organization: organization

        })
        await admin.save();
    });
    res.sendStatus(204)
});

router.delete("/", async (req, res, next) => {
    const admins = await Admin.remove();
    return res.send(admins);
});
module.exports = router;
