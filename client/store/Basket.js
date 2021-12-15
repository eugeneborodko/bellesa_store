import { makeAutoObservable } from 'mobx'

class Basket {
  constructor() {
    this._basket = []
    makeAutoObservable(this)
  }

  add(arr) {
    // this._basket.push(arr)
    this._basket = arr
    // this._basket = [...this._basket, product]
    // console.log('from store: ', ._basket.length)
  }

  get basket() {
    return this._basket
  }
}

export default Basket