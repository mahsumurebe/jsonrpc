import {Request, Response} from "express";
import {MethodNotFound} from "../../Errors/MethodNotFound";
import {InternalError} from "../../Errors/InternalError";
import {ServerError} from "../../Errors/ServerError";

type RouteCallback = (body?: any, req?: Request, res?: Response) => any;
type RouteCallbackParams = {
    name: string,
    required?: boolean;
    type?: string;
    validate?: (value: string) => boolean;
}

type RouterList = { [key: string]: { callback: RouteCallback, params: RouteCallbackParams[] } };

export class Routes {
    _routes: RouterList = {};

    add(method: string, callback: RouteCallback, params?: RouteCallbackParams[]): this {
        this._routes[method] = {
            callback: callback,
            params: params
        };
        return this;
    }

    has(method: string): boolean {
        return !!this._routes[method];
    }

    list(): RouterList {
        return this._routes;
    }

    async call(method: string, params: any, req: Request, res: Response): Promise<any> {
        if (!this._routes[method]) {
            throw new MethodNotFound();
        }

        try {
            return this._routes[method].callback.apply(this._routes[method], [params || {}, req, res]) as any;
        } catch (e) {
            if (e instanceof ServerError) {
                throw e;
            } else {
                throw new InternalError(e);
            }
        }
    }
}