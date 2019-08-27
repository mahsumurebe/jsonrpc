import {RPC} from "../../@types/types";

export class Response implements RPC.Response.IData {
    code: any;
    id: any;
    jsonrpc: any;
    result: any;
}
