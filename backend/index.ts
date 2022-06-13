import { Server } from 'socket.io';

const io = new Server(8800, {
  cors: {
    origin: '*',
    allowedHeaders: ['Access-Control-Allow-Origin'],
  },
});

io.on('connection', (socket) => {
  // console.log('a user connected');
  socket.emit('hello', 'hello, world', (res) => {
    // console.log(res);
  });

  socket.on('message', ({ nickname, message }) => {
    console.log(`${nickname} said: ${message}`);
    io.emit('message', `${nickname} said: ${message}`);
  });
});
