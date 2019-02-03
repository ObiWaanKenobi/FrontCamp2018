const { Router } = require('express');
const NewsController = require('../controllers/NewsController');
const UserController = require('../controllers/UserController');

const router = Router();
const newsController = new NewsController();
const userController = new UserController();

// get all news by default
router.get('/', newsController.findAll);

router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;
