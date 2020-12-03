import { server } from './config';


import registerMiddlewares from './middlewares';


import { rootRouter } from './routes';


async function main() {
    registerMiddlewares(server);

    server.all('/', (req,res) => res.redirect('/v1'));


    server.use('/v1', rootRouter);
 
    // server.get('/get', (request, response, next) => {
    //     response.json({message:'Here we are Handling '+ request.method });

    // });

    // server.post('/post', (request, response, next) => {
    //     response.json({message:'Here we are Handling '+ request.method });

    // });

    // server.put('/put', (request, response, next) => {
    //     response.json({message:'Here we are Handling '+ request.method });

    // });

    // server.delete('/delete', (request, response, next) => {
    //     response.json({message:'Here we are Handling '+ request.method });

    // });


    server.listen();

    
}

main();