var express = require('express');
var router = express.Router();
const Template = require('../../db/models/template');


// get a list of all templates
router.get('/', async (req, res, next) => {
  const templates = await Template.find();
  return res.send(templates);
});

// make a new template
router.post('/', async (req, res, next) => {
  try {
    const { name, content, organization, lang, parent } = req.body;
    const template = new Template({
      name: req.body.name,
      content: req.body.content,
      organization: req.body.organization,
      lang,
      parent,
    });
    await template.save();

    res.send();
  } catch (err) {
    res.json(err.message);
  }
});

// template detail view
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  const parent = await Template.find({ _id: id });
  const children = await Template.find({ parent: id });

  return res.send({
    parent,
    children,
  });
});

module.exports = router;
