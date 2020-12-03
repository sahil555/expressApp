import request from "supertest";
import express from "express";
import {rootRouter} from "../routes";

const server = express();

server.use('/v1', rootRouter);

describe('GET /v1', function() {
    it('responds with json', function(done) {
        request(server)
        .get('/v1')
        .expect('Content-Type', /json/)
        .expect( res => {
            res.body.headers = {};
        })
        .expect(
            200,
            {   
                baseUrl: '/v1',
                headers: {},
                host: '127.0.0.1',
                ip: '::ffff:127.0.0.1',
                message: 'Handling GET',
                method: 'GET',
                path: '/'
            },
            done
        );
    });
});

describe('POST /v1', function() {
    it('responds with json', function(done) {
        request(server)
        .post('/v1')
        .expect('Content-Type', /json/)
        .expect( res => {
            res.body.headers = {};
        })
        .expect(
            200,
            {   baseUrl: '/v1',
                headers: {},
                host: '127.0.0.1',
                ip: '::ffff:127.0.0.1',
                message: 'Handling POST',
                method: 'POST',
                path: '/'
            },
            done
        );
    });
});
