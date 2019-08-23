import {ServerError, TErrorData} from "./ServerError";


export class MethodNotFound extends ServerError {
    constructor(public readonly  data: TErrorData | TErrorData[] = [], public readonly  message: string = 'Method not found', public readonly code: number | string = -32601) {
        super(...arguments);
    }
}