const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Admin = require('../models/admin')

const generateJwt = (id, email) => {
  return jwt.sign({id, email}, process.env.SECRET_KEY, {expiresIn: '24h'})
}

class AdminController {
  async create(req, res, next) {
    const { email, password } = req.body
    if (!email || !password) {
      return next(res.json({message: 'Не задан Email или пароль!' }))
    }
    const candidate = await Admin.findOne({where: {email}})
    if (candidate) {
      return next(res.json({message: 'Админ с данным email уже существует!' }))
    }
    const hashPassword = await bcrypt.hash(password, 5)
    const admin = await Admin.create({ email, password: hashPassword })
    const token = generateJwt(admin.id, email)
    return res.json({token})
  }

  async login(req, res, next) {
    const { email, password } = req.body
    const admin = await Admin.findOne({ where: { email } })
    if (!admin) return next(res.json({message: 'Админ не найден!'} ))
    let comparePassword = bcrypt.compareSync(password, admin.password)
    if (!comparePassword) {
      return next(res.json({message: 'Неверный пароль!'}))
    }
    const token = generateJwt(admin.id, email)
    return res.json({token})
  }

  async check(req, res) {
    const token = generateJwt(req.admin.id, req.admin.email)
    return res.json({token})
  }
}

module.exports = new AdminController()
