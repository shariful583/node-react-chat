const router = require('express').Router();

const { catchErrors } = require('../handler/errorHandler');
const Controller = require('../controllers/index');
const auth = require('../middleware/auth');

router.post('/', auth, catchErrors(Controller.ChatroomController.createChatRoom));

module.exports = router;