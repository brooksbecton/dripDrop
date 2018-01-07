var config = {
  apiKey: "AIzaSyB06clFp1xMfJw13d7gexxqQ6SvbooXa1o",
  authDomain: "dripdrop-de1e0.firebaseapp.com"
};

firebase.initializeApp(config);

/**
 * Gets the current user's info
 * @returns Promise
 */
function getCurrentUser() {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        return resolve(user);
      } else {
        resolve();
      }
    });
  });
}

/**
 * Returns a promise that will have the currently logged in user's
 * token on resolve
 * @returns Promise
 */
function getUserToken() {
  return new Promise(resolve => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        return firebase
          .auth()
          .currentUser.getIdToken(/* forceRefresh */ true)
          .then(idToken => resolve(idToken));
      }
    });
  });
}
