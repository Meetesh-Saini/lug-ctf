import io from 'socket.io-client';

const apiURL = "http://localhost:5000"
const socket = io(apiURL);

export { socket };