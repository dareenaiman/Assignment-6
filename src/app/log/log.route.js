const {Router} = require('express')
const logController = require('./log.controller.js')
const logRouter = Router()

logRouter.post('/capped', logController.createLog)

logRouter.post('/add-log',logController.addLog)

module.exports = logRouter;