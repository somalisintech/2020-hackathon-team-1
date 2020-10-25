var express = require('express');
var Users = require('../../db/models/Users')
var router = express.Router();

<<<<<<< HEAD
const Users = require("../../db/models/Users");

const Address = require("../../db/models/Address");

const Organization = require("../../db/models/Organization");

router.get("/", async (req, res, next) => {
  const users = await Users.find();
  return res.send(users);
=======
/* GET users listing. */
router.get('/', async function(req, res, next){
 const users = await Users.find({});
 return res.send(users);
>>>>>>> 368524fac8e0c3a25a5050b978df5e7f4a944a91
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
