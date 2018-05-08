'use strict'

const router = require('koa-router')()

const messagingRouter = require('./_messaging')
router.use('/messaging', messagingRouter.routes())

module.exports = router