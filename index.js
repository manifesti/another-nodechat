var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function (req, res) {
  res.render('index_view')
})

io.on('connection', function(socket){
  io.emit('joined', 'someone')
  socket.on('chatmessage', function(nick, msg){
    console.log(nick + ': ' + msg);
    io.emit('chatmessage', nick, msg);
  });
});

app.use(express.static('public'));

http.listen(3666, function(){
  console.log('********\n********\n********  listening on port 3666\n********\n********');
});
