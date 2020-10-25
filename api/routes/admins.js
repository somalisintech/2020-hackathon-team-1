const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


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
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(admin.password, salt, (err, hash) => {
                if (err) throw err;
                admin.password = hash;
                admin.save().then(() => {
                    console.log("Successfully registered admin");
                }).catch(err => {
                    console.log("Error registering admin", err);
                    return;
                })
            });
        });
        res.sendStatus(204)
    });
});
router.delete("/", async (req, res, next) => {
    const admins = await Admin.remove();
    return res.send(admins);
});
module.exports = router;
