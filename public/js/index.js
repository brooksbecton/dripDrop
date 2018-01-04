"use strict";
(function() {});

function postZip() {
  function getZipFromInput() {
    return document.getElementById("zipInput").value;
  }

  const zip = getZipFromInput();

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
      });
    })
    .catch(function(error) {
      // Handle error
    });
}
