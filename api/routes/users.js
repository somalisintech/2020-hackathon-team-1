const express = require('express');
const Users = require('../../db/models/Users')
const router = express.Router();

const Address = require("../../db/models/Address");

const Organization = require("../../db/models/Organization");

router.get("/", async (req, res, next) => {
  const users = await Users.find();
  return res.send(users);
});

router.post("/", async (req, res, next) => {
  let addressBody = req.body.address;
  const address = new Address({
    line1: addressBody.line1,
    city: addressBody.city,
    province: addressBody.province,
    postalCode: addressBody.postalCode
  });
  address.save().catch((err) => {
    console.log("Error saving user address ", err)
    res.sendStatus(500);
  })
  let orgBody = req.body.organization;
  Organization.findOne({ name: orgBody.name }).then(async (organization) => {
    const user = new Users({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: address,
      organization: organization
    });
    await user.save()
  }).catch((err) => {
    console.log("Error saving user ", err)
    res.sendStatus(500);
  })
  res.sendStatus(204)
});

router.delete("/", async (req, res, next) => {
  let orgId = req.body.organization;
  Users.remove({ organization: orgId }).then(() => {
    res.sendStatus(200);

  }).catch((err) => {
    console.log("Error deleting users ", err);
    res.sendStatus(500);
  })

});
module.exports = router;
