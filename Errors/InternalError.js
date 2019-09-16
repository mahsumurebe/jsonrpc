"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServerError_1 = require("./ServerError");
class InternalError extends ServerError_1.ServerError {
    constructor(data = [], message = 'Internal error', code = -32603) {
        super(...arguments);
        this.data = data;
        this.message = message;
        this.code = code;
    }
}
exports.InternalError = InternalError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZXJuYWxFcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FcnJvcnMvSW50ZXJuYWxFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUFzRDtBQUd0RCxNQUFhLGFBQWMsU0FBUSx5QkFBVztJQUMxQyxZQUE2QixPQUFrQyxFQUFFLEVBQW1CLFVBQWtCLGdCQUFnQixFQUFrQixPQUF3QixDQUFDLEtBQUs7UUFDbEssS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFESyxTQUFJLEdBQUosSUFBSSxDQUFnQztRQUFtQixZQUFPLEdBQVAsT0FBTyxDQUEyQjtRQUFrQixTQUFJLEdBQUosSUFBSSxDQUEwQjtJQUV0SyxDQUFDO0NBQ0o7QUFKRCxzQ0FJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VydmVyRXJyb3IsIFRFcnJvckRhdGF9IGZyb20gXCIuL1NlcnZlckVycm9yXCI7XG5cblxuZXhwb3J0IGNsYXNzIEludGVybmFsRXJyb3IgZXh0ZW5kcyBTZXJ2ZXJFcnJvciB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5ICBkYXRhOiBURXJyb3JEYXRhIHwgVEVycm9yRGF0YVtdID0gW10sIHB1YmxpYyByZWFkb25seSAgbWVzc2FnZTogc3RyaW5nID0gJ0ludGVybmFsIGVycm9yJywgcHVibGljIHJlYWRvbmx5IGNvZGU6IG51bWJlciB8IHN0cmluZyA9IC0zMjYwMykge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIH1cbn0iXX0=