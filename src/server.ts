import * as express from 'express';
import { request } from 'https';

import * as globals from './globals';

export class Server {
    app: express.Application;

    static init(): Server {
        return new Server();
    }

    constructor() {
        this.app = express();
        this.configure();
    }

    private configure() {
        this.app.get('/', (request: express.Request, response: express.Response) => {
            response.send('Soniaczek kluseczka');
        });
    }
}
