import { RPC } from "../../@types/types";
export declare class ErrorResponse {
    code?: number;
    message: string;
    data?: RPC.Response.IErrorData[];
    constructor(error: RPC.Response.IErrorData);
}
//# sourceMappingURL=ErrorResponse.d.ts.map