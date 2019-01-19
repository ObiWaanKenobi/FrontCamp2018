const { Router } = require('express');
const news = require('../db/newsSource');

const router = Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'News APP', news });
});

module.exports = router;
