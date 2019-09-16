import { ServerError, TErrorData } from "./ServerError";
export declare class InvalidParams extends ServerError {
    readonly data: TErrorData | TErrorData[];
    readonly message: string;
    readonly code: number | string;
    constructor(data?: TErrorData | TErrorData[], message?: string, code?: number | string);
}
//# sourceMappingURL=InvalidParams.d.ts.map