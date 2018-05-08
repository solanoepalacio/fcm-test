importScripts('https://www.gstatic.com/firebasejs/4.13.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.13.0/firebase-messaging.js')

var config = {
  apiKey: "AIzaSyDo3LAQImjT743YXdZ5cXu7TcyulRHigcI",
  authDomain: "messaging-test-585d9.firebaseapp.com",
  databaseURL: "https://messaging-test-585d9.firebaseio.com",
  projectId: "messaging-test-585d9",
  storageBucket: "messaging-test-585d9.appspot.com",
  messagingSenderId: "1032000593202"
};

firebase.initializeApp(config)

const messagingService = firebase.messaging()

messagingService.setBackgroundMessageHandler((payload) => {
  console.log('background', payload)
  const title = 'background notification title'
  const options = {
    body: payload.data.status
  }
  self.registration.showNotification(title, options)
})