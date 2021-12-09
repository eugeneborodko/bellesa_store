import { makeAutoObservable } from 'mobx'

class Product {
  constructor() {
    this._categories = []
    this._brands = []
    this._products = []
    this._selectedCategory = null
    this._selectedBrand = null
    this._page = 1
    this._totalCount = 0
    this._limit = 1
    makeAutoObservable(this)
  }

  setCategories(categories) {
    this._categories = categories
  }

  setBrands(brands) {
    this._brands = brands
  }

  setProducts(products) {
    this._products = products
  }

  setSelectedCategory(category) {
    this.setPage(1)
    this._selectedCategory = category
  }

  setSelectedBrand(brand) {
    this.setPage(1)
    this._selectedBrand = brand
  }

  setPage(page) {
    this._page = page
  }

  setTotalCount(totalCount) {
    this._totalCount = totalCount
  }

  setLimit(limit) {
    this._limit = limit
  }

  get categories() {
    return this._categories
  }

  get brands() {
    return this._brands
  }

  get products() {
    return this._products
  }

  get selectedCategory() {
    return this._selectedCategory
  }

  get selectedBrand() {
    return this._selectedBrand
  }

  get page() {
    return this._page
  }

  get totalCount() {
    return this._totalCount
  }

  get limit() {
    return this._limit
  }
}

export default Product