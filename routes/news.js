const { Router } = require('express');
const NewsController = require('../controllers/NewsController');

const router = Router();
const controller = new NewsController();

const checkIsAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(400).json({
    message: 'access denied'
  });
};

router.get('/', controller.findAll);
router.get('/:id', controller.findById);
router.post('/', controller.create);
router.put('/:id', checkIsAuthenticated, controller.update);
router.delete('/:id', checkIsAuthenticated, controller.delete);

module.exports = router;
