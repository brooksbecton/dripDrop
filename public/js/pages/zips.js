function handleRemove(zip) {
  removeZip(zip).then(() => {
    removeZipFromPage(zip);
  });
}

function removeZipFromPage(zip) {
  document.getElementById(zip).style.display = "none";
}

function removeZip(zip) {
  return new Promise(resolve => {
    if (zip) {
      getUserToken().then(idToken => {
        fetch("/api/usersZip/remove", {
          method: "post",
          headers: {
            Authorization: "Bearer " + idToken,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ zip })
        })
          .then(() => resolve())
          .catch(e => console.error(error));
      });
    } else {
      reject();
    }
  });
}
