chrome.extension.onRequest.addListener(ListeningMethod);

function ListeningMethod(request, sender, callback) {
  if (request.action == 'pause') {
    pauseAndResume();
  } else if (request.action == 'next') {
    next();
  }
}

function pauseAndResume() {
  injectScript(function() {
    $('.playCtl .btns a:eq(1)').click()
  });
}

function next() {
  injectScript(function() {
    $('.playCtl .btns a:eq(3)').click()
  });
}