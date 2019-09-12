"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServerError_1 = require("./ServerError");
class InvalidRequest extends ServerError_1.ServerError {
    constructor(data = [], message = 'Invalid request', code = -32600) {
        super(...arguments);
        this.data = data;
        this.message = message;
        this.code = code;
    }
}
exports.InvalidRequest = InvalidRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW52YWxpZFJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvU2VydmVyL0Vycm9ycy9JbnZhbGlkUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUFzRDtBQUd0RCxNQUFhLGNBQWUsU0FBUSx5QkFBVztJQUMzQyxZQUE2QixPQUFrQyxFQUFFLEVBQW1CLFVBQWtCLGlCQUFpQixFQUFrQixPQUF3QixDQUFDLEtBQUs7UUFDbkssS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFESyxTQUFJLEdBQUosSUFBSSxDQUFnQztRQUFtQixZQUFPLEdBQVAsT0FBTyxDQUE0QjtRQUFrQixTQUFJLEdBQUosSUFBSSxDQUEwQjtJQUV2SyxDQUFDO0NBQ0o7QUFKRCx3Q0FJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VydmVyRXJyb3IsIFRFcnJvckRhdGF9IGZyb20gXCIuL1NlcnZlckVycm9yXCI7XG5cblxuZXhwb3J0IGNsYXNzIEludmFsaWRSZXF1ZXN0IGV4dGVuZHMgU2VydmVyRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSAgZGF0YTogVEVycm9yRGF0YSB8IFRFcnJvckRhdGFbXSA9IFtdLCBwdWJsaWMgcmVhZG9ubHkgIG1lc3NhZ2U6IHN0cmluZyA9ICdJbnZhbGlkIHJlcXVlc3QnLCBwdWJsaWMgcmVhZG9ubHkgY29kZTogbnVtYmVyIHwgc3RyaW5nID0gLTMyNjAwKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxufSJdfQ==