"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServerError_1 = require("./ServerError");
class InvalidParams extends ServerError_1.ServerError {
    constructor(data = [], message = 'Invalid params', code = -32602) {
        super(...arguments);
        this.data = data;
        this.message = message;
        this.code = code;
    }
}
exports.InvalidParams = InvalidParams;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW52YWxpZFBhcmFtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TZXJ2ZXIvRXJyb3JzL0ludmFsaWRQYXJhbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQ0FBc0Q7QUFHdEQsTUFBYSxhQUFjLFNBQVEseUJBQVc7SUFDMUMsWUFBNkIsT0FBa0MsRUFBRSxFQUFtQixVQUFrQixnQkFBZ0IsRUFBa0IsT0FBd0IsQ0FBQyxLQUFLO1FBQ2xLLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBREssU0FBSSxHQUFKLElBQUksQ0FBZ0M7UUFBbUIsWUFBTyxHQUFQLE9BQU8sQ0FBMkI7UUFBa0IsU0FBSSxHQUFKLElBQUksQ0FBMEI7SUFFdEssQ0FBQztDQUNKO0FBSkQsc0NBSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NlcnZlckVycm9yLCBURXJyb3JEYXRhfSBmcm9tIFwiLi9TZXJ2ZXJFcnJvclwiO1xuXG5cbmV4cG9ydCBjbGFzcyBJbnZhbGlkUGFyYW1zIGV4dGVuZHMgU2VydmVyRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSAgZGF0YTogVEVycm9yRGF0YSB8IFRFcnJvckRhdGFbXSA9IFtdLCBwdWJsaWMgcmVhZG9ubHkgIG1lc3NhZ2U6IHN0cmluZyA9ICdJbnZhbGlkIHBhcmFtcycsIHB1YmxpYyByZWFkb25seSBjb2RlOiBudW1iZXIgfCBzdHJpbmcgPSAtMzI2MDIpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB9XG59Il19