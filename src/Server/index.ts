import express, {Express, Request} from "express";
import {Routes} from "./Library/Routes";
import {ParseError} from "./Errors/ParseError";
import {EventEmitter} from "events";
import * as http from "http";
import {InvalidParams} from "./Errors/InvalidParams";
import {RPC} from "../@types/types";
import {Output} from "./Library/Output";
import {AddressInfo} from "net";
import bodyParser = require("body-parser");

export {Output};

export interface Server {
    //region On

    on(event: 'ready', callback: (port: number, hostname: string, backlog: number, callback?: (...args: any[]) => void) => void): this;

    on(event: 'ready', callback: (port: number, hostname: string, callback?: (...args: any[]) => void) => void): this;

    on(event: 'response', callback: (output: RPC.Response.IData, req: Request, res: Response) => void): this;

    on(event: 'request', callback: (body: RPC.Request.IData, req: Request, res: Response) => void): this;

    on(event: 'ready', callback: (port: number, callback?: (...args: any[]) => void) => void): this;

    on(event: 'ready', callback: (path: string, callback?: (...args: any[]) => void) => void): this;

    on(event: 'ready', callback: (handle: any, listeningListener?: () => void) => void): this;

    on(event: 'response', callback: (output: RPC.Response.IData, req: Request) => void): this;

    on(event: 'ready', callback: (address: AddressInfo | string | null) => void): this;

    on(event: 'ready', callback: (callback?: (...args: any[]) => void) => void): this;

    on(event: 'request', callback: (req: Request, res: Response) => void): this;

    on(event: 'routing', callback: (req: Request, res: Response) => void): this;

    on(event: 'error', callback: (e: Error, req: Request, res: Response) => void): this;

    on(event: 'error', callback: (e: Error, req: Request) => void): this;

    on(event: 'request', callback: (req: Request) => void): this;

    on(event: 'routing', callback: (req: Request) => void): this;

    on(event: 'error', callback: (e: Error) => void): this;

    on(event: string, listener: (...args) => void): this;

    //endregion

    //region Emits

    emit(event: 'ready', callback: (port: number, hostname: string, backlog: number, callback?: (...args: any[]) => void) => http.Server): boolean;

    emit(event: 'ready', callback: (port: number, hostname: string, callback?: (...args: any[]) => void) => http.Server): boolean;

    emit(event: 'response', callback: (output: RPC.Response.IData, req: Request, res: Response) => void): boolean;

    emit(event: 'ready', callback: (port: number, callback?: (...args: any[]) => void) => http.Server): boolean;

    emit(event: 'ready', callback: (path: string, callback?: (...args: any[]) => void) => http.Server): boolean;

    emit(event: 'ready', callback: (handle: any, listeningListener?: () => void) => http.Server): boolean;

    emit(event: 'ready', callback: (callback?: (...args: any[]) => void) => http.Server): boolean;

    emit(event: 'error', callback: (e: Error, req: Request, res: Response) => void): boolean;

    emit(event: 'request', callback: (req: Request, res: Response) => void): boolean;

    emit(event: 'routing', callback: (req: Request, res: Response) => void): boolean;

    emit(event: 'error', callback: (e: Error) => void): boolean;

    emit(event: string, ...args): boolean;

    //endregion
}

export class Server extends EventEmitter {
    handle: Express;
    listener: http.Server;
    routes: Routes;

    constructor() {
        super();
        this.handle = express();
        this.routes = new Routes();
    }

    init() {
        let app = this.handle;
        app.set('trust proxy', true);

        //region Middlewares

        //For request emitter
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());

        // Error catch for bodyParser
        app.use((err, req, res, next) => {
            if (err instanceof SyntaxError) {
                next(new ParseError());
            } else {
                next(err, req, res);
            }
        });

        //Parsing body
        app.use((req, res, next) => {
            if (!req.body) {
                return next(new InvalidParams({
                    message: 'Request body not found.'
                }));
            }
            if ('object' !== typeof req.body || !('string' === typeof req.body.method && req.body.id && req.body.id)) {
                return next(new InvalidParams({
                    message: 'Invalid JSON-RPC Request Body'
                }));
            }
            next();
        });
        //endregion

        app.use((req, res, next) => {
            this.emit('request', req.body, req, res);
            next();
        });
        app.use((err, req, res, next) => {
            let output = Output.generate(err, req.body || {}, res);
            res
                .send(output)
                .end();
            this.emit('error', err, req, res);
        });

        app.post('/?$', (req, res) => {
            this.emit('routing', req, res);
            Promise
                .resolve(null)
                .then(() => {
                    let body: RPC.Request.IData = req.body;
                    return this.routes.call(body.method, body.params, req, res);
                })
                .then((result) => {
                    //On success
                    let output = Output.generate(result, req.body || {}, res);
                    this.emit('response', output);
                    res
                        .send(output)
                        .end();
                }, (e) => {
                    //On error
                    let output = Output.generate(e, req.body || {}, res);
                    res
                        .send(output)
                        .end();
                    this.emit('error', e, req, res);
                });
        });
        app.get('/?$', (req, res) => {
            throw new ParseError();
        });
    }


    listen(port: number, host?: string): Promise<http.Server> {
        return new Promise((succ, err) => {
            return this.listener = this.handle.listen(port, host, () => {
                let address = this.listener.address();
                this.emit('ready', address);
                //TODO: Teyfik'e sor
                succ(this.listener);
            }).on('error', err);
        });
    }
}
