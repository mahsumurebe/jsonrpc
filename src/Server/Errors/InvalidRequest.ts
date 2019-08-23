import {ServerError, TErrorData} from "./ServerError";


export class InvalidRequest extends ServerError {
    constructor(public readonly  data: TErrorData | TErrorData[] = [], public readonly  message: string = 'Invalid request', public readonly code: number | string = -32600) {
        super(...arguments);
    }
}