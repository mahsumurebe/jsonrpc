import {RPC} from "../../@types/types";

export class ErrorResponse {
    code?: number = null;
    message: string = null;
    data?: RPC.Response.IErrorData[] = null;

    constructor(error: RPC.Response.IErrorData) {
        this.code = error.code || null;
        this.message = error.message || null;
        this.data = error.data || null;
    }
}