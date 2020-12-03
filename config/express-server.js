import express  from 'express';

const server = express()

const PORT = process.env.PORT || 5000;

server.listen = server.listen.bind(server, PORT, () => {
    console.log('Server is listening on 127.0.0.1:'+ PORT )
});

export { server };