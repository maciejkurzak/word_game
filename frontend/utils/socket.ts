import { io } from 'socket.io-client';

const socket = io('ws://localhost:8800', {
  extraHeaders: {
    'Access-Control-Allow-Origin': '*',
  },
});

export default socket;
