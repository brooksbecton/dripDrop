const firebase = require("./../firebase");

/**
 * Takes in a notification object and saves it to the users profile
 * @param {String} uid
 * @param {Object} notification
 */
function saveNotification(uid, notification) {
  return new Promise((resolve, reject) => {
    if (!notification) {
      reject(new Error("notification not defined"));
    } else {
      firebase
        .database()
        .ref("users/" + uid + "/notifications")
        .push(notification);
      return resolve();
    }
  });
}

module.exports = saveNotification;
