import {ServerError, TErrorData} from "./ServerError";


export class InvalidParams extends ServerError {
    constructor(public readonly  data: TErrorData | TErrorData[] = [], public readonly  message: string = 'Invalid params', public readonly code: number | string = -32602) {
        super(...arguments);
    }
}