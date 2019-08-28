import {RPC} from "../../@types/types";

export class Response<T> implements RPC.Response.IData {
    code: any;
    id: any;
    jsonrpc: any;
    result: T;
}
