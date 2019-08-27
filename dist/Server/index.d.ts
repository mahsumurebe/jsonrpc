/// <reference types="node" />
import { Express, Request } from "express";
import { Routes } from "./Library/Routes";
import { EventEmitter } from "events";
import * as http from "http";
import { RPC } from "../@types/types";
import { Output } from "./Library/Output";
import { AddressInfo } from "net";
export { Output };
export interface Server {
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
    on(event: string, listener: (...args: any[]) => void): this;
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
    emit(event: string, ...args: any[]): boolean;
}
export declare class Server extends EventEmitter {
    handle: Express;
    listener: http.Server;
    routes: Routes;
    constructor();
    init(): void;
    listen(port: number, host?: string): Promise<http.Server>;
}
//# sourceMappingURL=index.d.ts.map