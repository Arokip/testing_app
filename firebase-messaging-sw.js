// // Give the service worker access to Firebase Messaging.
// // Note that you can only use Firebase Messaging here. Other Firebase libraries
// // are not available in the service worker.
// importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js');
// importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js');

// // Initialize the Firebase app in the service worker by passing in
// // your app's Firebase config object.
// // https://firebase.google.com/docs/web/setup#config-object
// firebase.initializeApp({
//   apiKey: "AIzaSyAftcygTG7XI6VEVa6bbkGEaBvxOP4SlNE",
//   authDomain: "snaxe-454813.firebaseapp.com",
//   projectId: "snaxe-454813",
//   storageBucket: "snaxe-454813.firebasestorage.app",
//   messagingSenderId: "747157544491",
//   appId: "1:747157544491:web:ee0ce906db16c5a524546e",
//   measurementId: "G-DD900ME8XE"
// });

// // Retrieve an instance of Firebase Messaging so that it can handle background
// // messages.
// const messaging = firebase.messaging();

// // Handle background messages
// messaging.onBackgroundMessage(async (payload) => {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);

//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: '/assets/snaxe_logo.png'
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// }); 