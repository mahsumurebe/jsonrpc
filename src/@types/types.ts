export namespace RPC {
    export interface IPayload {
        id?: any;
        method: string,
        params: any
    }

    export namespace Request {
        export interface IData extends IPayload {
            jsonrpc: string;
            method: string;
            params: {},
        }

        export interface ICall extends IPayload {
            jsonrpc: string;
            method: 'call';
            params: {
                coin?: string,
                method?: string,
                params?: {}
            }
        }
    }

    export namespace Response {
        export interface IData {
            result: any;
            id: any;
            jsonrpc: any;
            code?: any;
        }

        export interface IErrorData {
            code?: number;
            message: string;
            data?: IErrorData[]
        }

        export interface IError extends IData {
            result: null;
            error: IErrorData
        }
    }

    export namespace IClient {

    }

    export namespace IServer {
    }
}
