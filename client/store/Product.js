import { makeAutoObservable } from 'mobx'

class Product {
  constructor() {
    this._categories = [
      {
        id: 1,
        name: 'Крема',
      },
      {
        id: 2,
        name: 'Шампуни'
      }
    ]
    this._brands = [
      {
        id: 1,
        name: 'Бренд 1',
      },
      {
        id: 2,
        name: 'Бренд 2'
      }
    ]
    this._products = [
      {
        id: 1,
        name: 'Крем 1',
        price: 100,
        img: 'https://images.unsplash.com/photo-1609195064085-c65e6aebda17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
      },
      {
        id: 2,
        name: 'Крем 2',
        price: 200,
        img: 'https://images.unsplash.com/photo-1617289013503-56557cbc4d9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
      },
      {
        id: 3,
        name: 'Крем 3',
        price: 300,
        img: 'https://images.unsplash.com/photo-1609195064085-c65e6aebda17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
      },
      {
        id: 4,
        name: 'Крем 4',
        price: 4200,
        img: 'https://images.unsplash.com/photo-1617289013503-56557cbc4d9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
      },
      {
        id: 5,
        name: 'Крем 4',
        price: 4200,
        img: 'https://images.unsplash.com/photo-1617289013503-56557cbc4d9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
      }
    ]
    this._selectedCategory = ''
    this._selectedBrand = ''
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
    this._selectedCategory = category
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand
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
}

export default Product