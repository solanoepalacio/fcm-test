'use strict'

const firebaseAdmin = require('firebase-admin')

const serviceAccountCredentials = require('config/fcm-test-credentials.json')
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccountCredentials),
  databaseURL: 'https://messaging-test-585d9.firebase.io'
})

module.exports = firebaseAdmin