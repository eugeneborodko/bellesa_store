const Router = require('express')
const router = new Router()
const categoryController = require('../controllers/categoryController')
const authMiddleware = require('../middleware/auth')

router.post('/', authMiddleware, categoryController.create)
router.get('/', categoryController.getAll)

module.exports = router
