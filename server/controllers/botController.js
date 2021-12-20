const axios = require('axios')

class BotController {
  async send(req, res) {
    const { message } = req.body

    const { data } = await axios.post(`https://api.telegram.org/bot${process.env.BOT_ID}/sendMessage?chat_id=${process.env.CHAT_ID}&text=${encodeURI(message)}`, {message})

    return data
  }
}

module.exports = new BotController()
