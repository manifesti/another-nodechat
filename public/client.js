$(function () {
  var socket = io();
  $('form').submit(function(){
    socket.emit('chatmessage', $('#nick').val(), $('#m').val());
    $('#m').val('');
    return false;
  });
  socket.on('chatmessage', function(nick, msg){
    $('#messages').append($('<li class=msghead>').text(nick + ": " + msg));
    // $('#messages').append($('<li class=msgbody>').text(msg));
  });
});
