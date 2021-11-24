const path = require('path')
const uuid = require('uuid')
const Product = require('../models/product')
const ApiError = require('../error/ApiError')

class ProductController {
  async create(req, res, next) {
    try {
      const { name, price, categoryId, brandId } = req.body
      const { img } = req.files
      let fileName = uuid.v4() + '.jpg'
      img.mv(path.resolve(__dirname, '..', 'static', fileName))
      const product = await Product.create({
        name,
        price,
        categoryId, 
        brandId,
        img: fileName
      })
      return res.json(product)
    } catch (err) {
        next(ApiError.badRequest(err.message))
    }  
  }

  async getAll(req, res) {
    const products = await Product.findAll()
    return res.json(products)
  }

  async getOne(req, res) {
  }
}

module.exports = new ProductController()
