import { makeAutoObservable } from 'mobx'

class ProductCounter {
  constructor() {
    this._counter = 1
    makeAutoObservable(this)
  }

  increase() {
    this._counter = this._counter + 1
  }

  decrease() {
    if (this._counter > 1) {
      this._counter = this._counter - 1
    }
  }

  change(val) {
    this._counter = val
  }

  get counter() {
    return this._counter
  }
}

export default ProductCounter