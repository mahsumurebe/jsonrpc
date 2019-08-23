export * from "./dist";
declare module "jsonrpc" {
    export namespace RPC {
        export interface IPayload {
            id?: any;
            method: string,
            params: any
        }

        export namespace Request {
            interface IData extends IPayload {
                jsonrpc: string;
                method: string;
                params: {},
            }

            interface ICall extends IPayload {
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
            interface IData {
                result: any;
                id: any;
                jsonrpc: any;
                code?: any;
            }

            interface IErrorData {
                code?: number;
                message: string;
                data?: IErrorData[]
            }

            interface IError extends IData {
                result: null;
                error: IErrorData
            }
        }

        export namespace IClient {

        }

        export namespace IServer {
        }
    }
}