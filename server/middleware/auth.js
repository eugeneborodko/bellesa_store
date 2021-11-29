const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  if (req.method === 'OPTIONS') {
    next()
  }
  try {
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
      return res.json({message: 'Не авторизован. Токен не валиден!'})
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    req.admin = decoded
    next()
  } catch (err) {
     res.status(401).json({message: 'Не авторизован'})
  }
}