import helmet from 'helmet';
import cors from 'cors';
import express from 'express';
import basicAuth from 'express-basic-auth';

export default server => {
    server.use(cors());
    server.use(helmet());

    server.use(
        basicAuth({
            users: {
                admin: 'expressserver'
            },
            challenge:true
        })
    );

    server.use(express.json());
};