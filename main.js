let saveBtn = document.querySelector(".save-btn")
function checkFileExistence(filePath) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', filePath, false);
    xhr.send();
    return xhr.status !== 404;
  }

saveBtn.addEventListener("click", () => {
    let fileExists = checkFileExistence('./url.txt');
    if (fileExists) {
        return;
    }

})