const { Router } = require('express');
const news = require('../db/newsSource');

const router = Router();
const newsString = JSON.stringify(news, null, 2);

router.get('/', (req, res) => {
  res.send(newsString);
});

router.get('/:id', (req, res) => {
  res.send(newsString);
});

router.post('/', (req, res) => {
  res.send(newsString);
});

router.put('/:id', (req, res) => {
  res.send(newsString);
});

router.delete('/:id', (req, res) => {
  res.send(newsString);
});

module.exports = router;
