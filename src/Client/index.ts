import Axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {stringify as paramsSerializer} from 'qs';
import {RPCError} from "./Errors/RPCError";
import {RPC} from "../@types/types";
import Response = RPC.Response;
import {ErrorResponse} from "./Abstracts/ErrorResponse";

export type ClientOptions = AxiosRequestConfig;

type rpcReturnType = Response | Error ;

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


    mappingResponse(res: any | any[], multiple: boolean = false): rpcReturnType | rpcReturnType[] | ErrorResponse {
        if (res instanceof Array) {
            return res.map((item: AxiosResponse) => {
                return this.mappingResponse(item, true);
            }) as Response[] | Error[];
        }
        if (res.error) {
            if (!multiple) {
                throw new RPCError(res.error, res.error.message || 'RPC Error', res.error.code || -32003);
            } else {
                return new ErrorResponse(res.error);
            }
        }
        return res.result;
    };


    async request(url, params): Promise<AxiosResponse | AxiosResponse[]> {
        return this.axios
            .post(url, params || this.defaultParams, {})
            .then(response => (response ? response.data : response))
            .catch((err: AxiosError) => {
                if (err.response && err.response.data) {
                    return this.mappingResponse(err.response.data);
                }
                throw err;
            });
    }

    rpc<T>(args: RPC.IPayload): Promise<T>;
    rpc<T>(arg1: RPC.IPayload, ...args: RPC.IPayload[]): Promise<T[]>;
    rpc<T>(args: RPC.IPayload[]): Promise<T>;
    rpc<T>(...args: (RPC.IPayload | RPC.IPayload[])[]): Promise<T> {
        let data: (RPC.IPayload | RPC.IPayload[]) = args.flat(Infinity)
            .map((item, i) => {
                return {
                    id: ++i,
                    jsonrpc: '2.0',
                    ...item,
                };
            });

        if (data.length === 1) {
            data = data[0];
        }

        return this
            .request('', data)
            .then(this.mappingResponse.bind(this))
            .then((data: any) => data);
    }
}