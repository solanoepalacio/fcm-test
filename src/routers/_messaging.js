'use strict'

const fs = require('fs')
const path = require('path')

const router = require('koa-router')()

const fcm = require('src/services/fcm')

const subscribed = []

router.post('/subscribe', async function (ctx) {
  const { fcmToken, userId } = ctx.request.body

  if (!fcmToken) {
    throw new Error('no fcm token')
  }

  subscribed.push(fcmToken)
  ctx.body = { status: 'ok' }
})

router.get('/send-test-messages', async function (ctx) {

  subscribed.forEach(token => {
    const message = {
      data: {
        prospectCont: '50'
      }
    }

    fcm.messaging().send({
      token,
      data: {
        prospectCount: '50'
      }
      // notification: {
      //   'title': 'notification title', 
      //   'body': 'notification body'
      // }
    })
    .then((response) => console.log('succesfully sent message:', response))
    .catch((e) => console.error('error sending message', e))
  })
  ctx.status = 200
  ctx.body = 'ok'
})

module.exports = router
