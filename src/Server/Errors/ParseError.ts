import {ServerError, TErrorData} from "./ServerError";


export class ParseError extends ServerError {
    constructor(public readonly  data: TErrorData | TErrorData[] = [], public readonly  message: string = 'Parse error', public readonly code: number | string = -32700) {
        super(...arguments);
    }

}