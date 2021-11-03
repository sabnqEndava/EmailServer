const socketIO = require('socket.io');

const socket={} as any;

function connectSocket(server:any){
    socket.io = socketIO(server, {
        cors: {
            origin: '*'
        }
    })
    console.log("socket listening")
}

export {
    connectSocket,
    socket,
}