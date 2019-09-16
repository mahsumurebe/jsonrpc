"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServerError_1 = require("./ServerError");
class MethodNotFound extends ServerError_1.ServerError {
    constructor(data = [], message = 'Method not found', code = -32601) {
        super(...arguments);
        this.data = data;
        this.message = message;
        this.code = code;
    }
}
exports.MethodNotFound = MethodNotFound;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0aG9kTm90Rm91bmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvRXJyb3JzL01ldGhvZE5vdEZvdW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQXNEO0FBR3RELE1BQWEsY0FBZSxTQUFRLHlCQUFXO0lBQzNDLFlBQTZCLE9BQWtDLEVBQUUsRUFBbUIsVUFBa0Isa0JBQWtCLEVBQWtCLE9BQXdCLENBQUMsS0FBSztRQUNwSyxLQUFLLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQztRQURLLFNBQUksR0FBSixJQUFJLENBQWdDO1FBQW1CLFlBQU8sR0FBUCxPQUFPLENBQTZCO1FBQWtCLFNBQUksR0FBSixJQUFJLENBQTBCO0lBRXhLLENBQUM7Q0FDSjtBQUpELHdDQUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZXJ2ZXJFcnJvciwgVEVycm9yRGF0YX0gZnJvbSBcIi4vU2VydmVyRXJyb3JcIjtcblxuXG5leHBvcnQgY2xhc3MgTWV0aG9kTm90Rm91bmQgZXh0ZW5kcyBTZXJ2ZXJFcnJvciB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5ICBkYXRhOiBURXJyb3JEYXRhIHwgVEVycm9yRGF0YVtdID0gW10sIHB1YmxpYyByZWFkb25seSAgbWVzc2FnZTogc3RyaW5nID0gJ01ldGhvZCBub3QgZm91bmQnLCBwdWJsaWMgcmVhZG9ubHkgY29kZTogbnVtYmVyIHwgc3RyaW5nID0gLTMyNjAxKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxufSJdfQ==