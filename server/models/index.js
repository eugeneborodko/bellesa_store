const Admin = require('./admin')
const Brand = require('./brand')
const Category = require('./category')
const CategoryBrand = require('./categoryBrand')
const Product = require('./product')
const ProductInfo = require('./productInfo')

Category.hasMany(Product)
Product.belongsTo(Category)

Brand.hasMany(Product)
Product.belongsTo(Brand)

Product.hasMany(ProductInfo, { as: 'info' })
ProductInfo.belongsTo(Product)

Category.belongsToMany(Brand, { through: CategoryBrand })
Brand.belongsToMany(Category, { through: CategoryBrand })

module.exports = {
  Admin,
  Brand,
  Category,
  CategoryBrand,
  Product,
  ProductInfo,
}
