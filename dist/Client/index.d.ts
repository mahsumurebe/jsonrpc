import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { Response } from "./Abstracts/Response";
import { ErrorResponse } from "./Abstracts/ErrorResponse";
import { RPC } from "../@types/types";
export declare type ClientOptions = AxiosRequestConfig;
declare type TMapResource = RPC.Response.IData;
declare type TMapReturnType = Response | Error;
export { ErrorResponse };
export interface Client {
}
export declare class Client {
    axios: AxiosInstance;
    defaultParams: [];
    constructor(config: ClientOptions);
    mapResponse(response: TMapResource[], multiple?: boolean): TMapReturnType[];
    mapResponse(response: TMapResource, multiple?: boolean): TMapReturnType;
    request(url: any, params: any): Promise<AxiosResponse | AxiosResponse[]>;
    rpc<T>(args: RPC.IPayload): Promise<T>;
    rpc<T>(arg1: RPC.IPayload, ...args: RPC.IPayload[]): Promise<T[]>;
    rpc<T>(args: RPC.IPayload[]): Promise<T>;
}
//# sourceMappingURL=index.d.ts.map