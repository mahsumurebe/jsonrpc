import {RPC} from "../../@types/types";
import ErrorData = RPC.Response.IErrorData;

export type TErrorData = ErrorData | Error | any;

export type ServerErrorJson = {
    code: number | string;
    message: string;
    data: TErrorData | TErrorData[]
}

export class ServerError extends Error {

    constructor(public readonly  data: TErrorData | TErrorData[] = [], public readonly  message: string = 'Server error', public readonly code: number | string = -32000) {
        super(message);
    }

    toJSON(): ServerErrorJson {
        return {
            code: this.code,
            message: this.message,
            data: this.data
        };
    }
}