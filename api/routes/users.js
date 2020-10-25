var express = require('express');
var Users = require('../../db/models/Users')
var router = express.Router();

const Users = require("../../db/models/Users");

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
  })
  let orgBody = req.body.organization;
  const organization = new Organization({
    name: orgBody.name,
    city: orgBody.city,
    phoneNumber: orgBody.phoneNumber
  })

  const user = new Users({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: address,
    organization: organization
  });
  await user.save()

  res.sendStatus(204)

});
module.exports = router;
