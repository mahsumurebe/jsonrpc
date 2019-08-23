import {RPC} from "../../@types/types";

export class RPCError extends Error {
    constructor(public readonly  data = [] as any, public readonly  message: string = 'Server error', public readonly code: number | string = -32000) {
        super(message);
    }
}