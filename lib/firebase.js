const firebase = require("firebase");

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
const config = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId
};
firebase.initializeApp(config);


module.exports = firebase;