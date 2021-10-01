require('dotenv').config()

const configuredUsers = process.env.USERS
const users = configuredUsers.split(',')

const config = {
  botToken: process.env.BOT_TOKEN,
  users,
  appPort: process.env.APP_PORT || 3000,
  isDevelopment: process.env.NODE_ENV == 'dev',
  currentHost: process.env.VERCEL_URL
}

module.exports = {
  config
}