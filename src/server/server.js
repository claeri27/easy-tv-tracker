require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const chalk = require('chalk')

const PORT = process.env.SERVER_PORT || 3001

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello my name is server!')
})

app.get('/healthcheck', (req, res) => res.status(200).json({status: 'healthy'}))

app.listen(PORT, () => {
  console.log(chalk.green.bold(`App has opened on port ${PORT}`))
}).setTimeout(500000)