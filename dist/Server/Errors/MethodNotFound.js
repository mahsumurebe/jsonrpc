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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0aG9kTm90Rm91bmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvU2VydmVyL0Vycm9ycy9NZXRob2ROb3RGb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUFzRDtBQUd0RCxNQUFhLGNBQWUsU0FBUSx5QkFBVztJQUMzQyxZQUE2QixPQUFrQyxFQUFFLEVBQW1CLFVBQWtCLGtCQUFrQixFQUFrQixPQUF3QixDQUFDLEtBQUs7UUFDcEssS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFESyxTQUFJLEdBQUosSUFBSSxDQUFnQztRQUFtQixZQUFPLEdBQVAsT0FBTyxDQUE2QjtRQUFrQixTQUFJLEdBQUosSUFBSSxDQUEwQjtJQUV4SyxDQUFDO0NBQ0o7QUFKRCx3Q0FJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VydmVyRXJyb3IsIFRFcnJvckRhdGF9IGZyb20gXCIuL1NlcnZlckVycm9yXCI7XG5cblxuZXhwb3J0IGNsYXNzIE1ldGhvZE5vdEZvdW5kIGV4dGVuZHMgU2VydmVyRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSAgZGF0YTogVEVycm9yRGF0YSB8IFRFcnJvckRhdGFbXSA9IFtdLCBwdWJsaWMgcmVhZG9ubHkgIG1lc3NhZ2U6IHN0cmluZyA9ICdNZXRob2Qgbm90IGZvdW5kJywgcHVibGljIHJlYWRvbmx5IGNvZGU6IG51bWJlciB8IHN0cmluZyA9IC0zMjYwMSkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIH1cbn0iXX0=