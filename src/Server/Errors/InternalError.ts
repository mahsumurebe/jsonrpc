import {ServerError, TErrorData} from "./ServerError";


export class InternalError extends ServerError {
    constructor(public readonly  data: TErrorData | TErrorData[] = [], public readonly  message: string = 'Internal error', public readonly code: number | string = -32603) {
        super(...arguments);
    }
}