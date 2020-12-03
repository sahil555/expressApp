import { request } from 'express';

import defaultMiddleware from './default';

export default function registerMiddleware(server) {
    defaultMiddleware(server);
};