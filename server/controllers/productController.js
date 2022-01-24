const path = require('path')
const uuid = require('uuid')
const Product = require('../models/product')
const ProductInfo = require('../models/productInfo')
const ApiError = require('../error/ApiError')

class ProductController {
  async create(req, res, next) {
    try {
      let { name, price, categoryId, brandId, info } = req.body
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
      
      if (info) {
        info = JSON.parse(info)
        info.forEach(({id, title, description}) => (
          ProductInfo.create({
            title, 
            description,
            productId: product.id
          })
        ))
      }
      return res.json(product)
    } catch (err) {
        console.log(err)
    }  
  }

  async getAll(req, res) {
    let { brandId, categoryId, brands, limit, page } = req.query

    limit = limit || 21
    page = page || 1

    let offset = page * limit - limit
    let products = []
    let productsWithBrands = []

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

    if (brands) {
      const brandsList = [...JSON.parse(brands)]
        products.filter((product) => {
          brandsList.forEach((brand) => {
            if (product.brandId === brand) {
              productsWithBrands.push(product)
            }
          })
      })
      return res.json(productsWithBrands)
    }
    
    return res.json(products)
  }

  async getOne(req, res) {
    const { id } = req.params
    const product = await Product.findOne({
      where: {id},
      include: [{model: ProductInfo, as: 'info'}]
    })
    return res.json(product)
  }
}

module.exports = new ProductController()
