const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
const authMiddleware = require('../middleware/auth')

router.post('/', authMiddleware, brandController.create)
router.get('/', brandController.getAll)

module.exports = router
