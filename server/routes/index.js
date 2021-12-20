const Router = require('express')
const router = new Router()
const userRouter = require('./adminController')
const categoryRouter = require('./categoryRouter')
const brandRouter = require('./brandRouter')
const productRouter = require('./productRouter')
const botRouter = require('./botRouter')

router.use('/admin', userRouter)
router.use('/category', categoryRouter)
router.use('/brand', brandRouter)
router.use('/product', productRouter)
router.use('/bot', botRouter)

module.exports = router
