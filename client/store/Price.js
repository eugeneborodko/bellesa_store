import { makeAutoObservable } from 'mobx'

class ProductPrice {
  constructor() {
    this._price = 0
    makeAutoObservable(this)
  }

  setPrice(num) {
    this._price = num
  }

  get price() {
    return this._price
  }
}

export default ProductPrice