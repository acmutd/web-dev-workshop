const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: "acm-recipe",
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};

const firebase = require("firebase");
require("firebase/firestore");
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;
