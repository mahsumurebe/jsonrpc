"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServerError_1 = require("./ServerError");
class ParseError extends ServerError_1.ServerError {
    constructor(data = [], message = 'Parse error', code = -32700) {
        super(...arguments);
        this.data = data;
        this.message = message;
        this.code = code;
    }
}
exports.ParseError = ParseError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyc2VFcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FcnJvcnMvUGFyc2VFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUFzRDtBQUd0RCxNQUFhLFVBQVcsU0FBUSx5QkFBVztJQUN2QyxZQUE2QixPQUFrQyxFQUFFLEVBQW1CLFVBQWtCLGFBQWEsRUFBa0IsT0FBd0IsQ0FBQyxLQUFLO1FBQy9KLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBREssU0FBSSxHQUFKLElBQUksQ0FBZ0M7UUFBbUIsWUFBTyxHQUFQLE9BQU8sQ0FBd0I7UUFBa0IsU0FBSSxHQUFKLElBQUksQ0FBMEI7SUFFbkssQ0FBQztDQUVKO0FBTEQsZ0NBS0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NlcnZlckVycm9yLCBURXJyb3JEYXRhfSBmcm9tIFwiLi9TZXJ2ZXJFcnJvclwiO1xuXG5cbmV4cG9ydCBjbGFzcyBQYXJzZUVycm9yIGV4dGVuZHMgU2VydmVyRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSAgZGF0YTogVEVycm9yRGF0YSB8IFRFcnJvckRhdGFbXSA9IFtdLCBwdWJsaWMgcmVhZG9ubHkgIG1lc3NhZ2U6IHN0cmluZyA9ICdQYXJzZSBlcnJvcicsIHB1YmxpYyByZWFkb25seSBjb2RlOiBudW1iZXIgfCBzdHJpbmcgPSAtMzI3MDApIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB9XG5cbn0iXX0=