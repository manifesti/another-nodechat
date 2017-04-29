$(function () {
  var socket = io();
  $('form').submit(function(){
    socket.emit('chatmessage', $('#nick').val(), $('#m').val());
    $('#m').val('');
    return false;
  });
  socket.on('joined',function (text) {
    $('#messages').append($('<li class=join>').text(text + "joined the chat"));
  })
  socket.on('chatmessage', function(nick, msg){
    $('#messages').append($('<li class=msg>').text(nick + ": " + msg));
    // $('#messages').append($('<li class=msgbody>').text(msg));
  });
});
