const Admin = require('../models/admin')

class AdminController {
  async create(req, res) {
    const { email, password } = req.body
    const admin = await Admin.create({ email, password })
    return res.json(admin)
  }

  async login(req, res) {
    const { email, password } = req.body
    const admin = await Admin.findOne({ where: { email, password } })
    if (!admin) return res.json({message: 'Админ не найден!'} )
    return res.json(admin)
  }

  async check(req, res) {
  }
}

module.exports = new AdminController()
