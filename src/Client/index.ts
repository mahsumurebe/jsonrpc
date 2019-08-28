import Axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {stringify as paramsSerializer} from 'qs';
import {RPCError} from "./Errors/RPCError";
import {Response} from "./Abstracts/Response";
import {ErrorResponse} from "./Abstracts/ErrorResponse";
import {RPC} from "../@types/types";

export type ClientOptions = AxiosRequestConfig;

type TMapResource = RPC.Response.IData;
type TMapReturnType<T> = Response<T> | ErrorResponse;
export {ErrorResponse};

export class Client {
    axios: AxiosInstance;
    defaultParams: [];

    constructor(config: ClientOptions) {
        config = {
            headers: {
                'Content-Type': 'application/json'
            },
            ...config,
            ...{paramsSerializer}
        };

        if (config.baseURL) {
            let parsedUrl = new URL(config.baseURL);
            if (parsedUrl.username) {
                let credentials = {
                    username: parsedUrl.username,
                    password: parsedUrl.password,
                };
                delete parsedUrl.username;
                delete parsedUrl.password;
                config['auth'] = credentials;
                config['baseURL'] = parsedUrl.href;
            }
        }
        this.axios = Axios.create(config);
    }

    mapResponse<T>(response: TMapResource[], multiple?: boolean): TMapReturnType<T>[];
    mapResponse<T>(response: TMapResource, multiple?: boolean): TMapReturnType<T>;
    mapResponse<T>(response: TMapResource | TMapResource[], multiple?: boolean): TMapReturnType<T> | TMapReturnType<T>[] {
        if (response instanceof Array) {
            return response.map((item: TMapResource) => {
                return this.mapResponse<T>(item, true);
            });
        } else {
            if (response.error) {
                if (multiple) {
                    throw new ErrorResponse(response.error);
                } else {
                    throw new RPCError(response.error, response.error.message || 'RPC Error', response.error.code || -32003);
                }
            } else {
                if (multiple) {
                    let result = new Response<T>();
                    result.code = response.code;
                    result.id = response.id;
                    result.jsonrpc = response.jsonrpc;
                    result.result = response.result;
                    return result;
                } else {
                    return response.result;
                }
            }
        }
    }

    async request(url, params): Promise<AxiosResponse | AxiosResponse[]> {
        return this.axios
            .post(url, params || this.defaultParams, {})
            .then(response => (response ? response.data : response))
            .catch((err: AxiosError) => {
                if (err.response && err.response.data) {
                    return this.mapResponse(err.response.data);
                }
                throw err;
            });
    }

    rpc<T>(args: RPC.IPayload): Promise<T>;
    rpc<T>(arg1: RPC.IPayload, ...args: RPC.IPayload[]): Promise<TMapReturnType<T>[]>;
    rpc<T>(args: RPC.IPayload[]): Promise<TMapReturnType<T>[]>;
    rpc<T>(...args: (RPC.IPayload | RPC.IPayload[])[]): Promise<T> {
        let data: (RPC.IPayload | RPC.IPayload[]) = args.flat(Infinity)
            .map((item, i) => {
                return {
                    id: ++i,
                    jsonrpc: '2.0',
                    ...item,
                };
            });

        if (data.length === 1 && !(args[0] instanceof Array || args.length > 1)) {
            data = data[0];
        }

        return this
            .request('', data)
            .then(data => {
                return this.mapResponse<T>(data as any);
            })
            .then((data: any) => data);
    }
}
