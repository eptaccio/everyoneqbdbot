const { config } = require('./config')
const express = require('express')
const Telegraf = require('telegraf')
const { Extra } = require('telegraf')

const app = express()

const bot = new Telegraf(config.botToken, {
  telegram: {
    webhookReply: false
  }
})

bot.hears([
  /@geral/i, /@atencao/i,
], ctx => {
  const message = config.users.join(' ')

  return ctx.reply(
    message,
    Extra.inReplyTo(ctx.message.message_id)
  )
})

app.use(bot.webhookCallback('/callback'))

app.get('/', async (_req, res) => {
  const url = `${config.currentHost}/callback`

  try {
    await bot.telegram.setWebhook(url)
  } catch (error) {
    return res.send(error.message)
  }

  res.send(`listening telegram on ${url}`)
})

if (config.isDevelopment) {
  console.log('listening local')
  bot.launch()
}

app.listen(config.appPort, () => {
  console.log(`listening on ${config.appPort}`)
})
