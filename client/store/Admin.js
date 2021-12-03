import { makeAutoObservable } from 'mobx'

class Admin {
  constructor() {
    this._isAuth = true
    this._admin = {}
    makeAutoObservable(this)
  }

  setIsAuth(bool) {
    this._isAuth = bool
  }

  setAdmin(admin) {
    this._admin = admin
  }

  get isAuth() {
    return this.isAuth
  }

  get user() {
    return this.user
  }
}

export default Admin