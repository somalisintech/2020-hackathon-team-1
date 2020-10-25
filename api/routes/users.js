var express = require('express');
var Users = require('../../db/models/Users')
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next){
 const users = await Users.find({});
 return res.send(users);
});

module.exports = router;
