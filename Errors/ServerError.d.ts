import { RPC } from "../@types/types";
import ErrorData = RPC.Response.IErrorData;
export declare type TErrorData = ErrorData | Error | any;
export declare type ServerErrorJson = {
    code: number | string;
    message: string;
    data: TErrorData | TErrorData[];
};
export declare class ServerError extends Error {
    readonly data: TErrorData | TErrorData[];
    readonly message: string;
    readonly code: number | string;
    constructor(data?: TErrorData | TErrorData[], message?: string, code?: number | string);
    toJSON(): ServerErrorJson;
}
//# sourceMappingURL=ServerError.d.ts.map