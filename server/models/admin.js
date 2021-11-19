const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Admin = sequelize.define('admin', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
})

module.exports = Admin
