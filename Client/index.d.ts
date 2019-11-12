import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { Response } from "./Abstracts/Response";
import { ErrorResponse } from "./Abstracts/ErrorResponse";
import { RPC } from "..";
export declare type ClientOptions = AxiosRequestConfig;
declare type TMapResource = RPC.Response.IData;
declare type TMapReturnType<T> = Response<T> | ErrorResponse;
export { ErrorResponse };
declare type TParamType = Array<any> | {};
export declare class Client {
    axios: AxiosInstance;
    defaultParams: TParamType;
    permanentArguments: any[];
    constructor(config: ClientOptions);
    mapResponse<T>(response: TMapResource[], multiple?: boolean): TMapReturnType<T>[];
    mapResponse<T>(response: TMapResource, multiple?: boolean): TMapReturnType<T>;
    request(url: any, params: any): Promise<AxiosResponse | AxiosResponse[]>;
    rpc<T>(args: RPC.IPayload): Promise<T>;
    rpc<T>(arg1: RPC.IPayload, ...args: RPC.IPayload[]): Promise<TMapReturnType<T>[]>;
    rpc<T>(args: RPC.IPayload[]): Promise<TMapReturnType<T>[]>;
    private reduceParams;
    addPermanentArgument(params: TParamType): this;
}
//# sourceMappingURL=index.d.ts.map