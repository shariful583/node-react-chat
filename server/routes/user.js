const router = require('express').Router();

const { catchErrors } = require('../handler/errorHandler');

const Controller = require('../controllers/index');

router.post('/login', catchErrors(Controller.UserController.login));
router.post('/register', catchErrors(Controller.UserController.register));
router.get('/list', catchErrors(Controller.UserController.userList));

module.exports = router;