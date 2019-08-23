export declare namespace RPC {
    interface IPayload {
        id?: any;
        method: string;
        params: any;
    }
    namespace Request {
        interface IData extends IPayload {
            jsonrpc: string;
            method: string;
            params: {};
        }
        interface ICall extends IPayload {
            jsonrpc: string;
            method: 'call';
            params: {
                coin?: string;
                method?: string;
                params?: {};
            };
        }
    }
    namespace Response {
        interface IData {
            result: any;
            id: any;
            jsonrpc: any;
            code?: any;
        }
        interface IErrorData {
            code?: number;
            message: string;
            data?: IErrorData[];
        }
        interface IError extends IData {
            result: null;
            error: IErrorData;
        }
    }
    namespace IClient {
    }
    namespace IServer {
    }
}
//# sourceMappingURL=types.d.ts.map