import { Server } from 'socket.io';

const io = new Server(8800, {
  cors: {
    origin: '*',
    allowedHeaders: ['Access-Control-Allow-Origin'],
  },
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.emit('hello', 'hello, world', (res) => {
    console.log(res);
  });

  socket.on('message', (message) => {
    console.log(`${socket.id.substr(0, 5)} said: ${message}`);
    io.emit('message', `${socket.id.substr(0, 5)} said: ${message}`);
  });
});
