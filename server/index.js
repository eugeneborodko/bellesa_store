require('dotenv').config()
const express = require('express')
const path = require('path')
const sequelize = require('./db')
const models = require('./models/index')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (err) {
    console.log(err)
  }
}

start()
