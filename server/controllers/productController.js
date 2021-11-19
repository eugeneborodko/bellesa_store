const Product = require('../models/product')

class ProductController {
  async create(req, res) {
      const { name, price } = req.body
      const product = await Product.create({
        name,
        price,
      })
      return res.json(product)
     
  }

  async getAll(req, res) {
  }

  async getOne(req, res) {
  }
}

module.exports = new ProductController()
