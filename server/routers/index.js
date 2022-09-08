const router = require('express').Router();

const user = require('./users')
const handle = require('./handling')

router.use(user)
router.use(handle)
module.exports = router;