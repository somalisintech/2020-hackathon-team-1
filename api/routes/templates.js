var express = require("express");
var router = express.Router();
const Template = require("../../db/models/template");

router.get("/", async (req, res, next) => {
  const templates = await Template.find();
  return res.send(templates);
});

router.post("/", async (req, res, next) => {
  const template = new Template({
    name: req.body.name,
    content: req.body.content,
  });
  await template.save();

  res.send();
});

module.exports = router;
