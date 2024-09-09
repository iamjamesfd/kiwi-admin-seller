// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseConfig = {
  apiKey: "AIzaSyD_sAdY4jfN4BLx3TsqKYazKGgdtq0xNCk",
  authDomain: "notification-cdfdb.firebaseapp.com",
  projectId: "notification-cdfdb",
  storageBucket: "notification-cdfdb.appspot.com",
  messagingSenderId: "323761440331",
  appId: "1:323761440331:web:95cb87b935156556356fce",
  measurementId: "G-YTWFJ0BGWW",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
console.log('hello from sw')

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
