const express = require('express')
const router = express.Router()
const translateRovarsprak = require('../translations/translateRovarsprak')

//POST translate
router.post('/translate', (req, res) => {
  const { text } = req.body;
  const translatedText = translateRovarsprak(text);
  res.json({ translated: translatedText });
})

module.exports = router;