import {Response} from "express";
import {RPC} from "../../../@types/types";
import {ServerError, ServerErrorJson} from "../../Errors/ServerError";

export class Output {
    static _errorToObj(e: Error | any) {
        let out: ServerErrorJson | any = {};

        if (e instanceof ServerError) {
            out = e.toJSON();
            if (out.data && out.data instanceof Error) {
                out.data = Output._errorToObj(out.data);
            }
        } else if (e instanceof Error) {
            out = {
                code: e.name,
                message: e.message,
                stack: e.stack,
            };
        }

        return out;
    }

    static generate(data: Error, req: RPC.Request.IData, res: Response)
    static generate(data: any, req: RPC.Request.IData, res: Response): RPC.Response.IData {

        if (data instanceof Error) {
            return {
                id: req.id || null,
                jsonrpc: req.jsonrpc || '2.0',
                error: Output._errorToObj(data) as any,
                result: null
            };
        } else {
            return {
                id: req.id,
                jsonrpc: req.jsonrpc,
                result: data
            };
        }
    }
}
