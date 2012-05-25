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

var old_song_title = '';

setInterval(function () {
  var title_element = document.getElementsByTagName("h2")[0];  
   var new_song_title = title_element.title;
   if (new_song_title !== old_song_title ) {
      old_song_title = new_song_title;
       title_element.onTitleChange();
   }
}, 5000);

document.getElementsByTagName("h2")[0].onTitleChange = function() {
  var title_element = document.getElementsByTagName("h2")[0];  
  var music_info =  title_element.childNodes[1].title + " - " + title_element.title;
  chrome.extension.sendRequest({
        name: "showMusicInfoNoti",
        info: music_info
   });
} ; 