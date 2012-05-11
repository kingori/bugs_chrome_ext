window.addEventListener("keydown", bugsExtkeyListener, false);

function bugsExtkeyListener(e) {

  if (e.ctrlKey && e.altKey && e.keyCode) {
    if (e.keyCode == 66) {
      chrome.extension.sendRequest({
        name: "showBugsPlayer"
      });
    } else if (e.keyCode == 219) {
      chrome.extension.sendRequest({
        name: "pauseResumeBugsPlayer"
      });
    } else if (e.keyCode == 221) {
      chrome.extension.sendRequest({
        name: "nextBugsPlayer"
      });
    }
  }
}