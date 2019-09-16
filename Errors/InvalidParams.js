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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW52YWxpZFBhcmFtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FcnJvcnMvSW52YWxpZFBhcmFtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUFzRDtBQUd0RCxNQUFhLGFBQWMsU0FBUSx5QkFBVztJQUMxQyxZQUE2QixPQUFrQyxFQUFFLEVBQW1CLFVBQWtCLGdCQUFnQixFQUFrQixPQUF3QixDQUFDLEtBQUs7UUFDbEssS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFESyxTQUFJLEdBQUosSUFBSSxDQUFnQztRQUFtQixZQUFPLEdBQVAsT0FBTyxDQUEyQjtRQUFrQixTQUFJLEdBQUosSUFBSSxDQUEwQjtJQUV0SyxDQUFDO0NBQ0o7QUFKRCxzQ0FJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VydmVyRXJyb3IsIFRFcnJvckRhdGF9IGZyb20gXCIuL1NlcnZlckVycm9yXCI7XG5cblxuZXhwb3J0IGNsYXNzIEludmFsaWRQYXJhbXMgZXh0ZW5kcyBTZXJ2ZXJFcnJvciB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5ICBkYXRhOiBURXJyb3JEYXRhIHwgVEVycm9yRGF0YVtdID0gW10sIHB1YmxpYyByZWFkb25seSAgbWVzc2FnZTogc3RyaW5nID0gJ0ludmFsaWQgcGFyYW1zJywgcHVibGljIHJlYWRvbmx5IGNvZGU6IG51bWJlciB8IHN0cmluZyA9IC0zMjYwMikge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIH1cbn0iXX0=