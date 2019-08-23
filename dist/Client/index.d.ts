import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { RPC } from "../@types/types";
import { ErrorResponse } from "./Abstracts/ErrorResponse";
export declare type ClientOptions = AxiosRequestConfig;
declare type rpcReturnType = Response | Error;
export declare class Client {
    axios: AxiosInstance;
    defaultParams: [];
    constructor(config: ClientOptions);
    mappingResponse(res: any | any[], multiple?: boolean): rpcReturnType | rpcReturnType[] | ErrorResponse;
    request(url: any, params: any): Promise<AxiosResponse | AxiosResponse[]>;
    rpc<T>(args: RPC.IPayload): Promise<T>;
    rpc<T>(arg1: RPC.IPayload, ...args: RPC.IPayload[]): Promise<T[]>;
    rpc<T>(args: RPC.IPayload[]): Promise<T>;
}
export {};
//# sourceMappingURL=index.d.ts.map