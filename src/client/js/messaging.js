
// Initialize Firebase
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
messagingService.requestPermission()
.then(() => messagingService.getToken())
.then((token) => fetch('/messaging/subscribe', {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify({
    fcmToken: token,
    userId: 'the supposed user Id?'
  })
}))
.then((response) => response.json())
.then((status) => console.log('parsed response', status))
.catch((err) => {
  console.log('permission denied', err)
})

messagingService.onMessage((payload) => {
  console.log('message payload', payload)
})