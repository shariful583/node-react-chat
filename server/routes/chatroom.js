const router = require('express').Router();

const { catchErrors } = require('../handler/errorHandler');
const Controller = require('../controllers/index');
const auth = require('../middleware/auth');

router.get('/chat/list', auth, catchErrors(Controller.ChatroomController.chatUserList));

module.exports = router;