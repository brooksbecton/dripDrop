"use strict";

/**
 * Clears the text of the zip input
 */
function clearInput() {
  document.getElementById("zipInput").value = "";
}

/**
 * Gets zip from input
 */
function getZipFromInput() {
  return document.getElementById("zipInput").value;
}

/**
 * Driver for the zip submission process
 */
function handleSubmit() {
  postZip().then(function() {
    clearInput();
  });
}

/**
 * Saves zip to backend. Must be authed
 */
function postZip() {
  const zip = getZipFromInput();

  return new Promise(function(resolve) {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function(idToken) {
        fetch("api/usersZip/save", {
          method: "post",
          headers: {
            Authorization: "Bearer " + idToken,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ zip })
        }).then(() => resolve());
      });
  });
}
