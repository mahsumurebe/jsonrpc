/// <reference types="node" />
import { Express, Request, Response } from "express";
import { Routes } from "./Library/Routes";
import { EventEmitter } from "events";
import * as http from "http";
import { RPC } from "../@types/types";
import { Output } from "./Library/Output";
import { AddressInfo } from "net";
export { Output };
export declare class Server extends EventEmitter {
    handle: Express;
    listener: http.Server;
    routes: Routes;
    on(event: 'ready', callback: (port: number, hostname: string, backlog: number, callback?: (...args: any[]) => void) => void): this;
    on(event: 'ready', callback: (port: number, hostname: string, callback?: (...args: any[]) => void) => void): this;
    on(event: 'response', callback: (output: RPC.Response.IData, req?: Request, res?: Response) => void): this;
    on(event: 'request', callback: (body: RPC.Request.IData, req?: Request, res?: Response) => void): this;
    on(event: 'ready', callback: (port: number, callback?: (...args: any[]) => void) => void): this;
    on(event: 'ready', callback: (path: string, callback?: (...args: any[]) => void) => void): this;
    on(event: 'ready', callback: (handle: any, listeningListener?: () => void) => void): this;
    on(event: 'ready', callback: (address: AddressInfo | string | null) => void): this;
    on(event: 'ready', callback: (callback?: (...args: any[]) => void) => void): this;
    on(event: 'routing', callback: (req: Request) => void): this;
    on(event: 'error', callback: (e: Error, body?: any, req?: Request, res?: Response) => void): this;
    emit(event: 'ready', port: number, hostname: string, backlog: number, callback?: (...args: any[]) => void): boolean;
    emit(event: 'ready', port: number, hostname: string, callback?: (...args: any[]) => void): boolean;
    emit(event: 'response', output: RPC.Response.IData, req?: Request, res?: Response): boolean;
    emit(event: 'error', e: Error, body?: any, req?: Request, res?: Response): boolean;
    emit(event: 'ready', port: number, callback?: (...args: any[]) => void): boolean;
    emit(event: 'ready', path: string, callback?: (...args: any[]) => void): boolean;
    emit(event: 'ready', handle: any, listeningListener?: () => void): boolean;
    emit(event: 'request', body: any, req: Request, res: Response): boolean;
    emit(event: 'ready', callback?: (...args: any[]) => void): boolean;
    emit(event: 'routing', req: Request): boolean;
    constructor();
    init(): void;
    listen(port: number, host?: string): Promise<http.Server>;
}
//# sourceMappingURL=index.d.ts.map