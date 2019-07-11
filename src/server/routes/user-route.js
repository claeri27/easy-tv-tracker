const express = require('express')
const bodyParser = require('body-parser')
const models = require('../models/index')
const bcrypt = require('bcrypt')
const userRouter = express.Router()

userRouter.use(bodyParser.json())

userRouter.get('/', async (req, res) => {
  const users = await models.User.findAll({
    attributes: {exclude: ['password']}
  })
  res.json({users})
})

userRouter.get('/:id', async (req, res) => {
  try {
    const user = await models.User.findByPk(req.body.id, {
      attributes: {
        exclude: ['password']
      },
    })
    res.json({user})
  } catch (e) {
    console.log('Server couldn\'t GET user', e);
    res.sendStatus(404)
  }
})

userRouter.delete('/:id', async (req, res) => {
  try {
    const user = await models.User.findByPk(req.body.id)
    await user.destroy()
    res.json({user})
  } catch (e) {
    console.log('Server couldn\t DELETE user', e);
    res.sendStatus(404)
  }
})

userRouter.put('/:id', async (req, res) => {
  try {
    const user = await models.User.findByPk(req.body.id)
    if (req.body.password) {
      const password_digest = await bcrypt.hash(req.body.password, 10)
      req.body.password = password_digest
    }
    await user.update(req.body)
    const updatedUser = await models.User.findByPk(req.body.id)
    res.json({updatedUser})
  } catch (e) {
    res.status(404).json({e: 'Server couldn\'t process request to UPDATE user - User may not exist'})
  }
})

module.exports = {
  userRouter
}