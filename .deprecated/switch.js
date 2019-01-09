// Copyright 2016, Nudge, All rights reserved.


$(document).ready(function() {
  switchOff();
});

// image caching because svg arrives too late!

function switchOff() {
  var nudge_s = createEl(document.body, 'div', 'nudge_s');
    nudge_s.innerHTML =
      '<div id="s_container">' +
        '<div id="s_switch">' +
        '</div>' +
        '<div id="s_message">' +
          '<div id="s_message_contents">' +
            'Switch off this site' +
          '</div>' +
        '</div>' +
      '</div>';
  $("#nudge_s").on('click', '#s_container', function() {
      var s_message_contents = document.getElementById('s_message_contents');
      var s_message = document.getElementById('s_message');
      s_message.style.maxWidth = "350px";
      s_message_contents.innerHTML = "Switching off...";
      initOff();
    }
  );    
}

function bouncer() {
  classList(document.getElementById('s_container')).add('bounce');
  function clear() {
    classList(document.getElementById('s_container')).remove('bounce');
  }
  setTimeout(clear, 2000);
}