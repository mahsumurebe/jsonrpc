import { Request, Response } from "express";
declare type RouteCallback = (body?: any, req?: Request, res?: Response) => any;
declare type RouteCallbackParams = {
    name: string;
    required?: boolean;
    type?: string;
    validate?: (value: string) => boolean;
};
declare type RouterList = {
    [key: string]: {
        callback: RouteCallback;
        params: RouteCallbackParams[];
    };
};
export declare class Routes {
    _routes: RouterList;
    add(method: string, callback: RouteCallback, params?: RouteCallbackParams[]): this;
    has(method: string): boolean;
    list(): RouterList;
    call(method: string, params: any, req: Request, res: Response): Promise<any>;
}
export {};
//# sourceMappingURL=index.d.ts.map