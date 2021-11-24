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
    let { brandId, categoryId, limit, page } = req.query
    limit = limit || 9
    page = page || 1
    let offset = page * limit - limit
    let products
    if (!brandId && !categoryId) {
      products = await Product.findAll({limit, offset})
    }
    if (brandId && !categoryId) {
      products = await Product.findAll({where:{brandId}, limit, offset})
    }
    if (!brandId && categoryId) {
      products = await Product.findAll({where:{categoryId}, limit, offset})
    }
    if (brandId && categoryId) {
      products = await Product.findAll({where:{brandId, categoryId}, limit, offset})
    }
    return res.json(products)
  }

  async getOne(req, res) {
  }
}

module.exports = new ProductController()
