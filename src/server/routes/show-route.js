const express = require('express')
const bodyParser = require('body-parser')
const models = require('../models/index')
const showRouter = express.Router()

showRouter.use(bodyParser.json())

showRouter.get('/', async (req, res) => {
  const shows = await models.Show.findAll()
  res.json({ shows })
})

showRouter.get('/:id', async (req, res) => {
  try {
    const show = await models.Show.findByPk(req.body.id)
    res.json({ show })
  } catch (e) {
    console.log("Server couldn't GET show", e)
    res.sendStatus(404)
  }
})

showRouter.delete('/:id', async (req, res) => {
  try {
    const show = await models.Show.findByPk(req.body.id)
    await show.destroy()
    res.json({ show })
  } catch (e) {
    console.log("Server couldn't DELETE show", e)
    res.sendStatus(404)
  }
})

showRouter.put('/:id', async (req, res) => {
  try {
    const show = await models.Show.findByPk(req.body.id)
    await show.update(req.body)
    const updatedUser = await models.Show.findByPk(req.body.id)
    res.json({ updatedUser })
  } catch (e) {
    res.status(404).json({
      e: "Server couldn't process request to UPDATE show - Show may not exist",
    })
  }
})

module.exports = {
  showRouter,
}
