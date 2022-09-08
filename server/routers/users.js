const { signUpController, signInController, logOutController, getUserController } = require('../controllers');
const { checkAuth } = require('../middleWares')

const router = require('express').Router();

router.post('/signup', signUpController);
router.post('/signin', signInController);
router.get('/check-logged', logOutController);
router.get('/users/:id', checkAuth, getUserController);


module.exports = router;